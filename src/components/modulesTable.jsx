import React, {Component} from 'react';
import { getAssets } from '../services/assets';
import {Link} from 'react-router-dom';

class ModulesTable extends Component{

    state = {
        // assets: getAssets()
    }

    render(){
        console.log('this.props.modules: ' + this.props.modules)
        return(
            <table className="table col-md-10">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Module</th>
                        <th>Size Difference</th>
                        <th>Assets impacted count</th>
                        <th>Assets impacted</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.modules.map(m => (
                            <tr>
                                <td>{m.serial}</td>
                                <td>{m.name}</td>
                                <td>{m.sizeDifference}</td>
                                <td>{m.assetsImpactedCount}</td>
                                <td>{JSON.stringify(m.assetsImpactedNames)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default ModulesTable;
