import React, {Component} from 'react'

class Pagination extends Component{
    state = {

    }

    render(){
        console.log(this.props.totalItems)
        console.log(this.props.pageSize)

        let numberOfPages = Math.ceil(this.props.totalItems/this.props.pageSize);
        console.log(numberOfPages)

        var pages = []
        for(var i=1;i<=numberOfPages;i++){
            pages.push(i)
        }

        return(
            <nav>
                <ul className="pagination">
                {
                    pages.map(page => (
                        <li key={page} className={ page==this.props.currentPage ? "page-item active" : "page-item"} onClick={() => this.props.onPageChange(page)}><a className="page-link">{page}</a></li>
                    ))   
                }
                </ul>
            </nav>
        )
    }
}

export default Pagination
