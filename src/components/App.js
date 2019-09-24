import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.jpg';

class App extends Component{
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio})
    }

    render() {
        return(
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <Title />
                <p>gotta catch em all!</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in San Francisco</p>
                            <p>I do Product Management and React development</p>
                            <p>I also love hiking</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;