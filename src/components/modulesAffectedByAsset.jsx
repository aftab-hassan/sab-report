import React, {Component} from 'react'
import ModulesAffectedByAssetTable from './modulesAffectedByAssetTable' 

class ModulesAffectedByAsset extends Component{
    state={

    }

    render(){
        console.log(this.props.match.params.assetName)
        return(
            <ModulesAffectedByAssetTable
                assetName={this.props.match.params.assetName}
            />
        )
    }
}

export default ModulesAffectedByAsset;
