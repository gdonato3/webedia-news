import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class Icons extends Component {
  render (){
    const icons = {
      'pacman': 'M30.148 5.588c-2.934-3.42-7.288-5.588-12.148-5.588-8.837 0-16 7.163-16 16s7.163 16 16 16c4.86 0 9.213-2.167 12.148-5.588l-10.148-10.412 10.148-10.412zM22 3.769c1.232 0 2.231 0.999 2.231 2.231s-0.999 2.231-2.231 2.231-2.231-0.999-2.231-2.231c0-1.232 0.999-2.231 2.231-2.231z',
      'menu': 'M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z',
      'search': 'M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z'
    };
    return <svg width={this.props.w} height={this.props.h} viewBox="0 0 32 32">
            <path d={icons[this.props.name]}></path>
          </svg>
  }
}

class MenuMobile extends Component {

  loadNews(news) {
    console.log('as')
  }

  openMenu() {
    document.querySelector('.backdrop').classList.remove("d-none");
    document.querySelector('.mobile-menu').style.left = 0;
    document.querySelector('.close-menu-btn').classList.remove("d-none");
    document.querySelector('.search-mobile').style.zIndex = 0;
    document.querySelector('.App-header img').style.zIndex = 0;
    document.querySelector('body').style.overflow = "hidden";
    document.querySelector('.header-bg').style.zIndex = 0;
  }

  closeMenu () {
    document.querySelector('.backdrop').classList.add("d-none");
    document.querySelector('.mobile-menu').style.left = '-235px';
    document.querySelector('.close-menu-btn').classList.add("d-none");
    document.querySelector('body').style.overflow = "";
    document.querySelector('.App-header img').style.zIndex = 1;
    document.querySelector('.search-mobile').style.zIndex = 2;
    document.querySelector('.header-bg').style.zIndex = 1;
  }

  render () {
    return <div>
      <a href="#" onClick={this.openMenu}>
        <Icons w="32" h="32" name="menu"/>
      </a>
      <div className="backdrop d-none d-lg-none">
      </div>
      <a href="#" onClick={this.closeMenu} className="rounded-circle font-weight-bold close-menu-btn d-none">X</a>
      <div className="mobile-menu">
        <div className="mobile-menu-item text-uppercase text-blue">
          <a href="#" onClick={() => this.props.func('br')}>Notícias em Destaque</a>
          <div className="separator"></div>
        </div>
        <div className="mobile-menu-item text-uppercase text-blue">
          <a href="#" onClick={() => this.props.func('br')}>Notícias do Brasil</a>
          <div className="separator"></div>
        </div>
        <div className="mobile-menu-item text-uppercase text-blue">
          <a href="#" onClick={() => this.props.func('us')}>Notícias dos EUA</a>
          <div className="separator"></div>
        </div>
        <div className="mobile-menu-item text-uppercase text-blue">
          <a href="#" onClick={() => this.props.func('ar')}>Notícias da Argentina</a>
          <div className="separator"></div>
        </div>
        <div className="mobile-menu-item text-uppercase text-blue">
          <a href="#" onClick={() => this.props.func('fr')}>Notícias da França</a>
          <div className="separator"></div>
        </div>
      </div>
    </div>
  }
}

class SearchMobile extends Component {
  constructor(props) {
    super(props);
  }

  openSearch() {
    document.querySelector('.mobile-search-input').classList.remove('d-none')
    document.querySelector('.close-search-btn').classList.remove('d-none')
    document.querySelector('.mobile-search-input').style.opacity = 1

    if (window.screen.availWidth < 375) {
      document.querySelector('.search-mobile').style.right = '238px'
      document.querySelector('.mobile-search-input').style.width = '238px'
    }
    else if(window.screen.availWidth < 425) {
      document.querySelector('.search-mobile').style.right = '296px'
      document.querySelector('.mobile-search-input').style.width = '296px'
    }
    else {
      document.querySelector('.search-mobile').style.right = '330px'
      document.querySelector('.mobile-search-input').style.width = '330px'
    }
  }

  closeSearch() {
    document.querySelector('.mobile-search-input').classList.add('d-none')
    document.querySelector('.close-search-btn').classList.add('d-none')
    document.querySelector('.mobile-search-input').style.width = '0px'
    document.querySelector('.mobile-search-input').style.opacity = 0
    document.querySelector('.search-mobile').style.right = '25px'

  }
  
  render () {
    return <div className="search-mobile d-lg-none">
      <a onClick={this.openSearch}>
        <Icons w="32" h="32" name="search"/>
      </a>
      <input className="mobile-search-input d-none" onKeyPress={this.props.keyPress} onBlur={this.props.func} placeholder="Pesquisa"></input>
      <a href="#" onClick={this.closeSearch} className="rounded-circle font-weight-bold close-search-btn d-none">X</a>
    </div>
  }
}

class Card extends Component {
  constructor(props) {
    super(props);
  }

  redirect(url) {
    window.open(url, '_blank');
  }

  render () {    
    var d = new Date(this.props.data.publishedAt.slice(0, this.props.data.publishedAt.indexOf('T')).replace(/-/g, '/'))
    var dateofArticle = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    return <div className={"col-12 col-lg-"+ this.props.colSize +" mb-3"}>
        <div onClick={() => this.redirect(this.props.data.url)} className="card shadow h-100">
            <img src={this.props.data.urlToImage} className="card-img-top" alt="NewsImage" />
            <div className="card-body p-0">
              {/* <img src={this.props.data.urlToImage} className="w-100" alt="NewsImage" /> */}
            <div className="px-2">
              <div className="article-date text-muted pt-2">
                <p>{dateofArticle}</p>
              </div>
              <div className="article-title text-uppercase text-blue font-weight-bold">
                <p>{this.props.data.title}</p>
              </div>
              <div className="article-description text-secondary">
                <p>{this.props.data.content}</p>
              </div>
              <div className="font-weight-bold text-uppercase text-blue">
                <p>por: {this.props.data.author?this.props.data.author:this.props.data.source.name}</p>
              </div>
            </div>
            </div>
          </div>
        </div> 
  }
}

class Menu extends Component {
  render () {
    return <div className="menu p-3 mt-5 d-none d-lg-block">
      <button className="btn text-uppercase text-blue" href="#" onClick={() => this.props.func('br')}>Notícias em Destaque</button>
      <button className="btn text-uppercase text-blue" href="#" onClick={() => this.props.func('br')}>Notícias do Brasil</button>
      <button className="btn text-uppercase text-blue" href="#" onClick={() => this.props.func('us')}>Notícias dos EUA</button>
      <button className="btn text-uppercase text-blue" href="#" onClick={() => this.props.func('ar')}>Notícias da Argentina</button>
      <button className="btn text-uppercase text-blue" href="#" onClick={() => this.props.func('fr')}>Notícias da França</button>
    </div>
  }
}

class App extends Component {
  constructor() {
      super();
      this.state = {
          data: [],
          currentPage: 1,
          newsPerPage: 7
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    window.scrollTo(0, 0);
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  search() {
    document.querySelector('body').style.overflow = "";
    const url = 'https://newsapi.org/v2/everything?q='+this.state.searchText+'&apiKey=21bcf68c77f64b86915d5942e5cfff19';
    fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: responseJson,
                searchText: ''
            });
        })
        .catch((error) => {
            console.error(error);
        });
  }

  handleChange = (e) => {
    if(e.target.value != '')
      this.setState({searchText: e.target.value, data: []});
  }

  
  getData(news) {
    
    document.querySelector('body').style.overflow = "";
    this.setState({
        data: [],
    });
    const url = 'https://newsapi.org/v2/top-headlines?country='+news+'&apiKey=21bcf68c77f64b86915d5942e5cfff19';
    fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: responseJson,
            });
        })
        .catch((error) => {
            console.error(error);
        });
  }

  componentDidMount() {
     this.getData('br');
  }

  handleKeyPress (e) {
    if(e.key == 'Enter'){
      document.querySelector('.search-input').blur();
      document.querySelector('.mobile-search-input').blur();
    }
  }

  render() {
    
    if(this.state.searchText)
      this.search(this.state.searchText);

    if(this.state.data.articles) {
      const { data, currentPage, newsPerPage } = this.state;

      const indexOfLastNews = currentPage * newsPerPage;
      const indexOfFirstNews = indexOfLastNews - newsPerPage;
      const currentNews = data.articles.slice(indexOfFirstNews, indexOfLastNews);

      const renderCards = currentNews.map((news, idx) => {
        if(idx < 2)
          return <Card key={idx} data={news} colSize="6"/>;
        else if (idx >= 2 && idx < 5)
          return <Card key={idx} data={news} colSize="4"/>;
        else
            return <Card key={idx} data={news} colSize="6"/>;
      });

      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(data.articles.length / newsPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        if((currentPage + 3) >= number&&(currentPage - 3 <= number))
        return (
          <a className={"pagination-button rounded-circle shadow text-muted " + (number===currentPage?'active':'')} key={number} id={number} onClick={this.handleClick}>
            {number}
          </a>
        );
      });
      if(this.state.data.articles.length == 0)
        var noData = <div className="text-center text-muted font-italic">
                        <h4>Sem dados para exibir</h4>
                      </div>

      return (
        <div className="App">
          <div className="d-lg-none pl-4 position-fixed z-index-2 mobile-menu-btn float-left">
            <MenuMobile func={this.getData.bind(this)}/>
          </div>
          <div className="App-header">
          <div className="header-bg d-lg-none"></div>
            <div className="row justify-content-center">
              <img src={logo} className="App-logo" alt="logo" />
              <div>
                <input id="search" onKeyPress={this.handleKeyPress} onBlur={this.handleChange} className="search-input d-none d-lg-block"/>
              </div>
            </div>
            <Menu func={this.getData.bind(this)} />
          </div>
          <SearchMobile keyPress={this.handleKeyPress.bind(this)} func={this.handleChange.bind(this)}/>
          <div className="container mt-0 mt-lg-5">
            <div className="row justify-content-center">
              {noData}
              {renderCards}
            </div>
          </div>
          {/* <Card data={this.state.data}/> */}
          <div>
          <div className="mt-5 mb-5">
            {renderPageNumbers}
          </div>
          </div>
        </div>
      );
    }
  else return null;
  }
}

export default App;
