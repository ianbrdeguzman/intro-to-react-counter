import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <h4>Counter #{this.props.counter.id}</h4>
                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className='btn btn-secondary btn-sm'
                >
                    Decrement
                </button>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className='btn btn-secondary btn-sm m-2'
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className='btn btn-danger btn-sm m-2'
                >
                    Delete
                </button>
                {/* <ul>{this.renderTags()}</ul> */}
            </div>
        );
    }
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        if (this.props.counter.value === 0) {
            classes += 'warning';
        } else if (this.props.counter.value > 0) {
            classes += 'primary';
        } else {
            classes += 'danger';
        }
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
