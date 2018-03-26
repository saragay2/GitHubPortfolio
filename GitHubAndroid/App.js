/*
*   CS 242 Assignment 3.0
*   Author: Sara Gay
*   Date Last Modified: 3/26/18
*/


import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import axios from 'axios';

var profileUrl = 'https://api.github.com/users/defunkt';
var followersUrl = profileUrl + '/followers';
var followingUrl = profileUrl + '/following';

/*
*   Profile Page
*   Contains name, username, bio, email, and creation date.
*/
class ProfileScreen extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            github: [],
            realName: '',
            githubBio: '',
            email: '',
            userName: '',
            avatarUrl: null,
            createdAt: '',
            followers: '',
            notFound: "N/A"
        }
    }

    componentWillMount(){
        api.getProfile(profileUrl).then((res) => {
            this.setState({
                github: res,
                realName: res.name,
                githubBio: res.bio,
                userName: res.login,
                email: res.email,
                createdAt: res.created_at,
                followers: res.followers_url,
                avatarUrl: res.avatar_url
            })
        });
    }

  render() {
    let profilePic = {
        uri: this.state.avatarUrl
    };
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lightgreen'}}>
        <Button
            title="Navigation"
            onPress={() => this.props.navigation.goBack()}
            color='green'
        />
        <ScrollView>
        <Text style={styles.titleText}>Profile</Text>
        <Image source={profilePic} style={{padding:10, width: 100, height: 100}}/>
        <Text style={styles.subtitleText}>Name:</Text>
        {this.state.realName ? (
            <Text style={styles.regularText}>{this.state.realName}</Text>
            ) : <Text style={styles.regularText}>{this.state.notFound}</Text>}

        <Text style={styles.subtitleText}>GitHub Username:</Text>
        {this.state.userName ? (
            <Text style={styles.regularText}>{this.state.userName}</Text>
            ) : <Text style={styles.regularText}>{this.state.notFound}</Text>}

        <Text style={styles.subtitleText}>Bio:</Text>
        {this.state.githubBio ? (
            <Text style={styles.regularText}>{this.state.githubBio}</Text>
            ) : <Text style={styles.regularText}>{this.state.notFound}</Text>}

        <Text style={styles.subtitleText}>Email:</Text>
        {this.state.email ? (
            <Text style={styles.regularText}>{this.state.email}</Text>
            ) : <Text style={styles.regularText}>{this.state.notFound}</Text>}
        <Button
            title="Followers"
            onPress={() => this.props.navigation.navigate('Followers')}
            color='darkblue'
        />
        <Button
            title="Following"
            onPress={() => this.props.navigation.navigate('Following')}
            color='navy'
        />
        <Text> </Text>
        <Text Style={styles.subtitleText}>Date Created:</Text>
        {this.state.createdAt ? (
                    <Text style={styles.subtitleText}>{this.state.createdAt}</Text>
                    ) : <Text style={styles.subtitleText}>{this.state.notFound}</Text>}
        </ScrollView>
      </View>
    );
  }
}

/*
*  Repositories Page:
*   Displays a list/table of all public repositories
*   Each item should contain the repository name, owner's username, and description.
*   Each cell should be reused
*   The list must be clickable
*/
class ReposScreen extends React.Component {
  render()
  {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lightgreen'}}>
        <Button
            title="Navigation"
            onPress={() => this.props.navigation.goBack()}
            color='green'
        />
        <ScrollView>
        <Text style={styles.titleText}>Repositories</Text>
        <Text style={styles.regularText}>None</Text>
        </ScrollView>
      </View>
    );
  }
}
/*
*   Followers Page:
*   Displays Github Followers
*/
class FollowersScreen extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            github: [],
            userUrl: '',
            //avatarUrl: '',
            userName: '',

            userUrl1: '',
            userName1: '',

            userUrl2: '',
            userName2: '',

            userUrl3: '',
            userName3: '',

            userUrl4: '',
            userName4: ''
        }
    }

    componentWillMount(){
        api.getFollowers(followersUrl).then((res) => {
            this.setState({
                github: res,
                userName: res[0].login,
                userUrl: res[0].url,
                avatarUrl: res[0].avatar_url,

                userName1: res[1].login,
                userUrl1: res[1].url,
                avatarUrl1: res[1].avatar_url,

                userName2: res[2].login,
                userUrl2: res[2].url,
                avatarUrl2: res[2].avatar_url,

                userName3: res[3].login,
                userUrl3: res[3].url,
                avatarUrl3: res[3].avatar_url,

                userName4: res[4].login,
                userUrl4: res[4].url,
                avatarUrl4: res[4].avatar_url
            })
        });
    }

      render() {
        let profilePic = {
            uri: this.state.avatarUrl
        };
        let profilePic1 = {
            uri: this.state.avatarUrl1
        };
        let profilePic2 = {
            uri: this.state.avatarUrl2
        };
        let profilePic3 = {
            uri: this.state.avatarUrl3
        };
        let profilePic4 = {
            uri: this.state.avatarUrl4
        };

        var newUrl = this.state.userUrl;
        var newUrl1 = this.state.userUrl1;
        var newUrl2 = this.state.userUrl2;
        var newUrl3 = this.state.userUrl3;
        var newUrl4 = this.state.userUrl4;

    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lightgreen'}}>
      <ScrollView>
        <Button
            title="Navigation"
            onPress={() => this.props.navigation.navigate('Home')}
            color='green'
        />
        <Image source={profilePic} style={{padding:10, width: 100, height: 100}}/>
        <Button
                    title={this.state.userName}
                    onPress={() => changeProfileUrl(newUrl)}
                    color='green'
                />
        <Image source={profilePic1} style={{padding:10, width: 100, height: 100}}/>
        <Button
                    title={this.state.userName1}
                    onPress={() => changeProfileUrl(newUrl1)}
                    color='green'
                />
        <Image source={profilePic2} style={{padding:10, width: 100, height: 100}}/>
        <Button
                    title={this.state.userName2}
                    onPress={() => changeProfileUrl(newUrl2)}
                    color='green'
                />
        <Image source={profilePic3} style={{padding:10, width: 100, height: 100}}/>
        <Button
                    title={this.state.userName3}
                    onPress={() => changeProfileUrl(newUrl3)}
                    color='green'
                />
        <Image source={profilePic4} style={{padding:10, width: 100, height: 100}}/>
        <Button
                    title={this.state.userName4}
                    onPress={() => changeProfileUrl(newUrl4)}
                    color='green'
                />

      </ScrollView>
      </View>
    );
  }
}
/*
*   Following Page:
    Displays who I might be following on Github
*/
class FollowingScreen extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            github: [],
            userUrl: '',
            //avatarUrl: '',
            userName: '',

            userName1: '',
            userUrl1: '',

            userName2: '',
            userUrl2: '',

            userName3: '',
            userUrl3: '',

            userName4: '',
            userUrl4: ''
        }
    }

    componentWillMount(){
        api.getFollowing(followingUrl).then((res) => {
            this.setState({
                github: res,
                userName: res[0].login,
                userUrl: res[0].url,
                avatarUrl: res[0].avatar_url,

                userName1: res[1].login,
                userUrl1: res[1].url,
                avatarUrl1: res[1].avatar_url,

                userName2: res[2].login,
                userUrl2: res[2].url,
                avatarUrl2: res[2].avatar_url,

                userName3: res[3].login,
                userUrl3: res[3].url,
                avatarUrl3: res[3].avatar_url,

                userName4: res[4].login,
                userUrl4: res[4].url,
                avatarUrl4: res[4].avatar_url

            })
        });
    }

  render() {
          let profilePic = {
              uri: this.state.avatarUrl
          };
          let profilePic1 = {
              uri: this.state.avatarUrl1
          };
          let profilePic2 = {
              uri: this.state.avatarUrl2
          };
          let profilePic3 = {
              uri: this.state.avatarUrl3
          };
          let profilePic4 = {
              uri: this.state.avatarUrl4
          };

          var newUrl = this.state.userUrl;
          var newUrl1 = this.state.userUrl1;
          var newUrl2 = this.state.userUrl2;
          var newUrl3 = this.state.userUrl3;
          var newUrl4 = this.state.userUrl4;
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lightgreen'}}>
              <ScrollView>
                <Button
                    title="Navigation"
                    onPress={() => this.props.navigation.navigate('Home')}
                    color='green'
                />
                <Text style={styles.subtitleText}>Top 5 Following</Text>
                <Image source={profilePic} style={{padding:10, width: 200, height: 200}}/>
                <Button
                            title={this.state.userName}
                            onPress={() => changeProfileUrl(newUrl)}
                            color='green'
                        />

                <Image source={profilePic1} style={{padding:10, width: 200, height: 200}}/>
                 <Button
                             title={this.state.userName1}
                             onPress={() => changeProfileUrl(newUrl1)}
                             color='green'
                         />

                <Image source={profilePic2} style={{padding:10, width: 200, height: 200}}/>
                 <Button
                             title={this.state.userName2}
                             onPress={() => changeProfileUrl(newUrl2)}
                             color='green'
                         />

                <Image source={profilePic3} style={{padding:10, width: 200, height: 200}}/>
                    <Button
                        title={this.state.userName3}
                        onPress={() => changeProfileUrl(newUrl3)}
                        color='green'
                    />


                <Image source={profilePic4} style={{padding:10, width: 200, height: 200}}/>
                    <Button
                        title={this.state.userName4}
                        onPress={() => changeProfileUrl(newUrl4)}
                        color='green'
                    />
              </ScrollView>
      </View>
    );
  }
}

function changeProfileUrl(inputUrl) {
                 profileUrl = inputUrl;
                 return;
             }
function changeFollowersUrl(inputUrl) {
                followersUrl = inputUrl;
                return;
}
function changeFollowingUrl(inputUrl){
                followingUrl = inputUrl;
                return;
}

// Used this as a source: https://www.youtube.com/watch?v=xmgY37oc_B4&t=325s
var api = {
    getProfile(inputUrl){
        var url = inputUrl;
        return fetch(url).then((res) => res.json());
    },
    getFollowers(followersUrl){
        var url = followersUrl;
        return fetch(url).then((res) => res.json());
    },
    getFollowing(followingUrl){
            var url = followingUrl;
            return fetch(url).then((res) => res.json());
    }
};

/*
* Navigation Page:
* The home page which serves as a hamburger-style nav menu for other pages
* All calls to the navigation menu at the top of other screens serve as a "go back"
*/
class NavScreen extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            github: [],
            userName: '',
            repos: 0,
            userUrl: '',
            followerNum: 0,
            followingNum: 0,
            followerUrl: '',
            notFound: "N/A"
        }
    }

    componentWillMount(){
        api.getProfile(profileUrl).then((res) => {
            this.setState({
                github: res,
                userName: res.login,
                repos: res.public_repos,
                userUrl: res.url,
                followerNum: res.followers,
                followingNum: res.following,
                followerUrl: res.followers_url
            })
        });
    }

  render() {
     let catPic = {
        uri: 'https://i.imgur.com/BV4FjvQ.png'
     };

  let followerInput = this.state.followerUrl;
  changeFollowersUrl(followerInput);

  let followingInput = this.state.userUrl + '/following';
  changeFollowingUrl(followingInput);

    var profile = "" + this.state.userName;
     var repos = "Repositories: " + this.state.repos;
     var followers = "Followers: " + this.state.followerNum;
     var following = "Following: " + this.state.followingNum;

    return (
        <View style=
        {{ flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'lightgreen'}}>
        <ScrollView>
            <Image source={catPic} style={{alignSelf: 'center', padding:50, width: 300, height: 300}}/>
            <Text style = {styles.titleText}> Navigation Menu</Text>
            <Text></Text>
            <Button
                title= {profile}
                onPress={() => this.props.navigation.navigate('Profile')}
                color='green'
            />
            <Button
                title={repos}
                color='darkgreen'
                onPress={() => this.props.navigation.navigate('PublicRepos')}
            />
            <Button
                title={followers}
                color='green'
                onPress={() => this.props.navigation.navigate('Followers')}
            />
            <Button
                title={following}
                color='darkgreen'
                onPress={() => this.props.navigation.navigate('Following')}
            />
        </ScrollView>
        </View>
    );
  }
}

/*
* Simple declaration of screen names and types--nothing fancy for now
*/
const RootStack = StackNavigator(
  {
    Home:
    {
        screen: NavScreen

    },
    Profile:
    {
        screen: ProfileScreen,
    },
    PublicRepos:
    {
        screen: ReposScreen,
    },
    Followers:
    {
        screen: FollowersScreen
    },
    Following:
    {
        screen: FollowingScreen
    },
  },
  {
    initialRouteName: 'Home',
  }
);

/*
*   Text styles
*/
const styles = StyleSheet.create({
  titleText:
  {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitleText:
  {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  regularText:
  {
    color: 'darkgreen',
    fontSize: 25,
  },
  followersText:
  {
    color: 'navy',
    fontSize: 25,
    //onPress={() => console.log('1st')},
    //onPress={()=>this.props.navigation.navigate('Followers')},
  },
  followingText:
  {
    color: 'navy',
    fontSize: 25,
    //onPress={() => this.props.navigation.navigate('Following')},
  },
});

/*
*   Loads the "root" of the page navigation--
*   In this case, the nav menu
*/
export default class App extends React.Component {

  render() {
    return <RootStack />;
  }
}