import React, { Component } from 'react';
import Scene from '../components/Scene';
import Page from '../components/Page';
import Canvas from '../components/Canvas';
import Properties from '../components/Properties';

class Gui extends Component {

    render() {
        return (
            <div style={styles.gui}>
                <Scene />
                <div id='pageContainer' style={styles.pageContainer}>
                    <Page id='frontpage'
                        name='Front View'
                        page='front'
                        selectPage={this.props.selectPage}
                        currView={this.props.data.currView}
                        properties={this.props.data.front} />
                    <Page id='backpage'
                        name='Back View'
                        page='back'
                        selectPage={this.props.selectPage}
                        currView={this.props.data.currView}
                        properties={this.props.data.back} />
                    <Page id='leftpage'
                        name='Left View'
                        page='left'
                        selectPage={this.props.selectPage}
                        currView={this.props.data.currView}
                        properties={this.props.data.left} />
                    <Page id='rightpage'
                        name='Right View'
                        page='right'
                        selectPage={this.props.selectPage}
                        currView={this.props.data.currView}
                        properties={this.props.data.right} />
                </div>
                <Canvas />
                <Properties
                    data={this.props.data}
                    updateProperties={this.props.updateProperties}
                    writeToFile={this.props.writeToFile} />
            </div>
        )
    }
}

let styles = {
    gui: {
        height: '90%',
        flex: '[3 0 85%]',
        backgroundColor: '#181b2a',
        padding: '1px',
        flexDirection: 'row',
        display: 'flex'
    },
    pageContainer: {
        height: '100%',
        width: '15%',
        minWidth: '240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}

export default Gui;