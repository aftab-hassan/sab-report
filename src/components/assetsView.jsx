import React, {Component} from 'react'
import {getAssets} from '../services/assets'
import AssetsTable from './assetsTable'
import SearchBox from './searchBox';

class AssetsView extends Component{
    
    state={
        searchString: ''
    };

    render(){
        // var assetsToDisplay = this.getAssetsToDisplay();
        // console.log('here:' + JSON.stringify(assetsToDisplay))

        const {assetsToDisplay} = this.getAssetsToDisplay();
        console.log('here:' + JSON.stringify(assetsToDisplay))

        // const {assetsCountToDisplay} = 

        // if( == 0){
        //     return <p>
        //         There are no assets to display!
        //     </p>
        // }

        return (
            <div className="row">
                 <div className = "col">
                    <SearchBox onChange={this.handleSearch} />

                    <AssetsTable>
                        assets={assetsToDisplay}
                    </AssetsTable>
                 </div>
            </div>
        );
    }

    handleSearch = (assetName) => {
        this.setState({searchString:assetName})
    }

    getAssetsToDisplay = () => {
        const assets = getAssets();
        console.log(JSON.stringify(assets))
        
        var assetsToDisplay = assets.filter(a => a.name.toLowerCase().startsWith(this.state.searchString))
        console.log(assetsToDisplay)

        return assetsToDisplay;
    }
}

export default AssetsView;
