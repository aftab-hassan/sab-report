import React, {Component} from 'react'
import ModulesAffectedByAssetTable from './modulesAffectedByAssetTable' 

class ModulesAffectedByAsset extends Component{
    state={

    }

    render(){
        // console.log(this.props.match.params.assetName)
        return(
            <div className="row">
                <div className="col-2">

                </div>

                <div className="col">
                    {/* <h4 id="form-layouts">Modules affected by {this.props.match.params.assetName}</h4> */}

                    <label>Modules affected by <b>{this.props.match.params.assetName}</b></label>

                    <p>

                    </p>

                    <ModulesAffectedByAssetTable
                        assetName={this.props.match.params.assetName}            
                    />
                </div>
            </div>
        )
    }
}

export default ModulesAffectedByAsset;
