declare module '*.svg' {
    import * as React from 'react'

    const ReactComponent: React.FunctionComponent<
    React.HTMLAttributes<unknown> &
      React.SVGProps<SVGSVGElement> & { title?: string }
    >

    export default ReactComponent
}
