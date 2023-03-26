import {
  ReactNode
} from 'react'
import {
  Code2,
} from 'lucide-react'

import { ToolName, ToolLog } from 'db/types'

import Base from './Base'


export interface Props {
  log: ToolLog
}

function RunSavedCode({
  log,
}: Props) {
  if (log.tool_name !== ToolName.RunSavedCode) throw new Error(`'${log.tool_name}': This component supports only logs for '${ToolName.WriteJavaScriptCode}' tool`)

  let body: ReactNode = null
  if (log.tool_input.trim()) {
    body = (
      <div className="
        pt-2
      ">
        <pre>
          {log.tool_input.trim()}
        </pre>
      </div>
    )
  }

  return (
    <Base
      log={log}
      icon={<Code2 size="16px" />}
      body={body}
    />
  )
}

export default RunSavedCode