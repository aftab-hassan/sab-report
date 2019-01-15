import React, {Component} from 'react'
import {getAssets} from '../services/assets'
import AssetsTable from './assetsTable'
import SearchBox from './searchBox';
import Pagination from './pagination';

class AssetsView extends Component{
    
    state={
        totalAssetCount:7,
        searchString: '',
        currentPage : 1,
        pageSize:3
    };

    render(){
        let assetsToDisplay = this.getAssetsToDisplay();
        console.log('here : ' + JSON.stringify(assetsToDisplay)) 
        console.log('inside render : assetsToDisplay.length == ' + assetsToDisplay.length)

        if(assetsToDisplay.length == 0){
            return(
                <div className="row">
                    <div className="col-2">
                    
                    </div>
                    <div className="col-md-6">
                        <SearchBox onChange={this.handleSearch}/>

                        <p>
                            There are no assets to display
                        </p>
                    </div>
                </div>
            )
        }

        return (
            <div className="row">
                 <div className="col-2">
                
                 </div>
                 <div className = "col">
                    <SearchBox onChange={this.handleSearch} />

                    <AssetsTable
                        assets={assetsToDisplay}
                    />

                    <Pagination 
                        totalItems = {this.state.totalAssetCount}
                        pageSize = {this.state.pageSize}
                        currentPage = {this.state.currentPage}
                        onPageChange = {this.handlePageChange}
                    />
                 </div>
            </div>
        );
    }

    handleSearch = (assetName) => {
        this.setState({searchString:assetName})
    }

    handlePageChange = (page) => {
        this.setState({currentPage:page})
    }

    getAssetsToDisplay = () => {
        const assets = getAssets();
        // this.setState( {totalAssetCount: assets.length});
        console.log(JSON.stringify(assets))
        
        // applying prefix search
        var assetsToDisplay = assets.filter(a => a.name.toLowerCase().startsWith(this.state.searchString))
        console.log('upon applying prefix search : assetsToDisplay == ' + JSON.stringify(assetsToDisplay))

        // applying pagination
        var fromIndex = (parseInt((this.state.currentPage-1)) * parseInt(this.state.pageSize));
        var toIndex = Math.min( ((this.state.currentPage)*this.state.pageSize), this.state.totalAssetCount )
        console.log('fromIndex == ' + fromIndex)
        console.log('toIndex == ' + toIndex)
        assetsToDisplay = assetsToDisplay.slice( fromIndex, toIndex ) 
        console.log('upon applying pagination : assetsToDisplay == ' + JSON.stringify(assetsToDisplay))

        return assetsToDisplay;
    }
}

export default AssetsView;
