import React from "react";
export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: 'panda',
            type: 'all'
        }
        this.handleKey = (e) => {
            if(e.key === 'Enter') {
                this.props.SearchHandler(this.state.search, this.state.type);
            }
        }
        this.handleFilter = (e) => {
            this.setState(() => ({type: e.target.dataset.type}), () => {
                this.props.SearchHandler(this.state.search, this.state.type);
            })
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            type="email"
                            placeholder='Search'
                            className="validate"
                            value={this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}
                        />
                        <button onClick={() => this.props.SearchHandler(this.state.search, this.state.type)} className='btn btn__search'>Search Movie</button>
                    </div>
                    <div>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                checked={this.state.type === 'all'}
                                data-type='all'
                                onChange={this.handleFilter}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                checked={this.state.type === 'movie'}
                                data-type='movie'
                                onChange={this.handleFilter}/>
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                checked={this.state.type === 'series'}
                                data-type='series'
                                onChange={this.handleFilter}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}