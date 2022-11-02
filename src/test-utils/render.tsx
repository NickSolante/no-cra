import { ReactElement } from 'react'
import { Queries, queries, render, RenderOptions } from '@testing-library/react'
// re-export everything
export * from '@testing-library/react'

const customRender = <
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  ui: ReactElement,
  options: RenderOptions<Q, Container, BaseElement> = {}
) => {
  type WrapperProps = {
    children: ReactElement
  }

  function Wrapper(props: WrapperProps) {
    const content = options.wrapper ? (
      <options.wrapper>{props.children}</options.wrapper>
    ) : (
      props.children
    )

    return <div>{content}</div>
  }
  return render(ui, { ...options, wrapper: Wrapper })
}

// override render method
export { customRender as render }
