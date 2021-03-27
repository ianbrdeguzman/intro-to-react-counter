import React, { Component } from 'react';
import Counter from './counter.jsx';

class Counters extends Component {
    render() {
        console.log('Counters - Rendered');
        const {
            onReset,
            onDelete,
            counters,
            onDecrement,
            onIncrement,
        } = this.props;
        return (
            <React.Fragment>
                <button
                    onClick={onReset}
                    className='btn btn-primary btn-sm m-2'
                >
                    Reset
                </button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={onDelete}
                        onDecrement={onDecrement}
                        onIncrement={onIncrement}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default Counters;
