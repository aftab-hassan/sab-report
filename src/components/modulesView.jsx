import React, {Component} from 'react'
import {getModules} from '../services/modules'
import ModulesTable from './modulesTable'
import SearchBox from './searchBox';
import Pagination from './pagination';

class ModulesView extends Component{
    state = {
        modules: getModules(),
        totalModuleCount:getModules().length,
        searchString: '',
        currentPage : 1,
        pageSize:5
    }

    render(){
        let modulesToDisplay = this.getModulesToDisplay();

        if(modulesToDisplay.length == 0){
            return(
                <div className="row">
                    <div className="col-2">
                    
                    </div>
                    <div className="col-md-6">
                        <SearchBox onChange={this.handleSearch}/>

                        <p>
                            There are no modules to display
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

                    <ModulesTable
                        modules={modulesToDisplay}
                    />

                    <Pagination 
                        totalItems = {this.state.totalModuleCount}
                        pageSize = {this.state.pageSize}
                        currentPage = {this.state.currentPage}
                        onPageChange = {this.handlePageChange}
                    />
                 </div>
            </div>
        );
    }

    handleSearch = (moduleName) => {
        this.setState({searchString:moduleName})
    }

    handlePageChange = (page) => {
        this.setState({currentPage:page})
    }

    getModulesToDisplay = () => {
        const modules = this.state.modules;
        console.log(JSON.stringify(modules))
        console.log('inside getAssetsToDisplay')
        
        // applying prefix search
        var modulesToDisplay = modules.filter(m => m.name.toLowerCase().startsWith(this.state.searchString))
        console.log('upon applying prefix search : modulesToDisplay == ' + JSON.stringify(modulesToDisplay))

        // applying pagination
        var fromIndex = (parseInt((this.state.currentPage-1)) * parseInt(this.state.pageSize));
        var toIndex = Math.min( ((this.state.currentPage)*this.state.pageSize), this.state.totalModuleCount )
        console.log('fromIndex == ' + fromIndex)
        console.log('toIndex == ' + toIndex)
        modulesToDisplay = modulesToDisplay.slice( fromIndex, toIndex ) 
        console.log('upon applying pagination : modulesToDisplay == ' + JSON.stringify(modulesToDisplay))

        return modulesToDisplay;
    }
}

export default ModulesView