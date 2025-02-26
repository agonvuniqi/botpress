import { AuthRole } from './typings'

export const defaultUserRole = 'dev'
export const defaultAdminRole = 'admin'
export const defaultRoles: AuthRole[] = [
  {
    id: 'admin',
    name: 'Administrator',
    description:
      'Administrators have full access to the workspace including adding members, creating bots and synchronizing changes.',
    rules: [
      { res: '*', op: '+r+w' },
      {
        res: 'module.code-editor.global.configs',
        op: '-r-w'
      }
    ]
  },
  {
    id: 'dev',
    name: 'Developer',
    description: 'Developers have full read/write access to bots, including flows, content, NLU and actions',
    rules: [
      { res: '*', op: '+r+w' },
      { res: 'admin.*', op: '+r-w' },
      { res: 'admin.collaborators.*', op: '-r' },
      {
        res: 'module.code-editor.global.*',
        op: '+r-w'
      },
      {
        res: 'module.code-editor.global.configs',
        op: '-r-w'
      }
    ]
  },
  {
    id: 'editor',
    name: 'Content Editor',
    description:
      'Content Editors have read/write access to content and NLU, and read-only access to flows and actions.',
    rules: [
      { res: '*', op: '+r' },
      { res: 'admin.collaborators.*', op: '-r' },
      { res: 'bot.flows', op: '+r-w' },
      { res: 'bot.content', op: '+r+w' },
      { res: 'module.qna', op: '+r+w' },
      { res: 'module.nlu', op: '+r+w' },
      {
        res: 'module.code-editor.*',
        op: '-r-w'
      }
    ]
  }
]
