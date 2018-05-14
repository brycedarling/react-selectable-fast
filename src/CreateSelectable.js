import React, { Component } from 'react'
import { object, bool } from 'prop-types'
import getBoundsForNode from './getBoundsForNode'

const createSelectable = WrappedComponent =>
  class SelectableItem extends Component {
    static propTypes = {
      selected: bool,
      wasSelected: bool,
    }

    static defaultProps = {
      selected: false,
      wasSelected: false,
    }

    static contextTypes = {
      selectable: object,
    }

    state = {
      selected: this.props.selected,
      wasSelected: this.props.selected,
      selecting: false,
    }

    componentDidMount() {
      this.registerSelectable()
    }

    componentWillUnmount() {
      this.context.selectable.unregister(this)
    }

    registerSelectable = containerScroll => {
      this.bounds = getBoundsForNode(this.node, containerScroll)
      this.context.selectable.register(this)
    }

    selectableRef = ref => (this.node = ref)

    render() {
      return (
        <WrappedComponent
          {...this.props}
          selected={this.state.selected}
          wasSelected={this.state.wasSelected}
          selecting={this.state.selecting}
          selectableRef={this.selectableRef}
        />
      )
    }
  }

export default createSelectable
