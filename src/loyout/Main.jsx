import React from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";
export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: true,
        }
        this.SearchHandler = this.SearchHandler.bind(this);
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=49ce69&s=panda')
            .then(response => response.json())
            .then(data => {
                this.setState({movies: data.Search, loading: false});
            });
    }

    SearchHandler(str, type = 'all') {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=49ce69&s=${str}${type!== 'all'?`&type=${type}` :''}`)
            .then(response => response.json())
            .then(data => {
                this.setState({movies: data.Search, loading:false});
            });
    }

    render() {
        return (
            <div className='content container'>
                <Search SearchHandler={this.SearchHandler}/>
                {this.state.loading
                    ?
                    <Loader/>
                    :
                    <Movies movies={this.state.movies}/>
                }
            </div>
        )
    }
}