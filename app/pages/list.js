import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {
    componentDidMount() {
        const { list } = this.props
        console.log(list)
    }

    fetchLists = () => {

    }

    render() {
        const props = this.props
        return (
            <div>
                <p>天苍苍野茫茫啊</p>
                <ul>
                    {props.list.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { ...state.list }
}

export default connect(mapStateToProps)(List)
