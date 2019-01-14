import React, {Component} from 'react'
import {getAssets} from '../services/assets'
import {AssetsTable} from './assetsTable'

class AssetsView extends Component{
    
    state={
        assets:getAssets()
    };

    render(){
        const {assets} = this.state.assets;
        const {assetsCount} = this.state.assets.length;

        if(assetsCount == 0){
            return <p>
                There are no assets to display!
            </p>
        }

        return (
            <div className="row">
                 <div className = "col">
                    <AssetsTable>
                        
                    </AssetsTable>
                 </div>
            </div>
        );
    }
}

export default AssetsView;
