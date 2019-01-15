import React, {Component} from 'react';
import {getAsset} from '../services/assets'

class ModulesAffectedByAssetTable extends Component{
    state = {
        // asset: getAsset('DetailsList')
        asset: getAsset(this.props.assetName)
    }

    render(){
        console.log('in ModulesAffectedByAssetTable, this.props.assetName : ' + this.props.assetName)
        console.log('in ModulesAffectedByAssetTable : ' + this.state.asset)

        return(
            <table id="modulesAffectedByAssetTable" className="table col-md-8">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Module</th>
                        <th>Size Difference</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.asset[0].modulesAffected.map(module => (
                        <tr>
                            <td>{module.serial}</td>
                            <td>{module.name}</td>
                            <td>{module.sizeDifference}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default ModulesAffectedByAssetTable
