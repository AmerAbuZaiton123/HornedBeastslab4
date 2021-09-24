import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Data from './component/data.json'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'
import FormA from './component/FormA'
import SelectedBeast from './component/SelectedBeast';
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state =
      { spData:Data,
        openModel: false,
        image_url: '',
        description: '',
        horns: '',
        keyword: '',
        title: '',
         like:0
      }

    }
    HornsFun=(getData)=>
    { this.setState({
         spData:getData
    })

    }

  closeModelFun = () => {
    this.setState({
      openModel: false
    })
  }

  openModelFun = (image_url, description, horns, keyword, title, like) => {
    this.setState({
      openModel: true,
      like:like,
      image_url: image_url,
      description: description,
      horns: horns,
      keyword: keyword,
      title: title
    })

  }
  render() {
    return (
      <> 
         <Header/>
        <div>
          <FormA   spData={this.state.spData}
                   HornsFun={this.HornsFun} />
          {
           this.state.spData.map(e => {
              return(
              <Main
                 image_url={e.image_url}
                title={e.title}
                description={e.description}
                keyword={e.keyword}
                horns={e.horns}
                openModelFun={this.openModelFun} />
                
            )})

          }
        </div>

        <SelectedBeast
          openModel={this.state.openModel}
          image_url={this.state.image_url}
          description={this.state.description}
          horns={this.state.horns}
          keyword={this.state.keyword}
          title={this.state.title}
          like={this.state.like}
          closeModelFun={this.closeModelFun}
        />
       <Footer />
      </>

    )
  }
}

export default App;
