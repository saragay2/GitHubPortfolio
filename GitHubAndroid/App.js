/*
*   CS 242 Assignment 3.2
*   Author: Sara Gay
*   Date Last Modified: 4/1/18
*/


import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TextInput, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { SearchBar } from 'react-native-elements';

var profileUrl = 'https://api.github.com/users/defunkt';
var followersUrl = profileUrl + '/followers';
var followingUrl = profileUrl + '/following';

var searchTemplateRepos = 'https://api.github.com/search/repositories?q=';
var searchTemplateUsers = 'https://api.github.com/search/users?q=';

var searchRepos = 'https://api.github.com/search/repositories?q=tetris+language';
var searchReposUpdated = searchRepos + '&sort=default';

var searchUsers = 'https://api.github.com/search/users?q=tetris+language';
var searchUsersUpdated = searchUsers + '&sort=default';

var searchTerm = "tetris language";

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
            search: '',
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
        <TextInput
            style = {styles.searchText}
            placeholder = 'Enter Search Query Here...'
            placeholderTextColor = 'grey'
            onChangeText={search => this.setState({search})}
            onEndEditing = {() => updateSearch(this.state.search)}
            value={this.state.search}
            onSubmitEditing = {() => this.props.navigation.navigate('SearchResults')}
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
    constructor(props)
    {
        super(props);
        this.state = {
            github: [],
            search: ''
        }
    }


  render()
  {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lightgreen'}}>
        <Button
            title="Navigation"
            onPress={() => this.props.navigation.goBack()}
            color='green'
        />
        <TextInput
            style = {styles.searchText}
            placeholder = 'Enter Search Query Here...'
            placeholderTextColor = 'grey'
            onChangeText={search => this.setState({search})}
            onEndEditing = {() => updateSearch(this.state.search)}
            value={this.state.search}
            onSubmitEditing = {() => this.props.navigation.navigate('SearchResults')}
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
            search: '',

            userUrl: '',
            userName: '',

            userUrl1: '',
            userName1: '',

            userUrl2: '',
            userName2: '',

            userUrl3: '',
            userName3: '',

            userUrl4: '',
            userName4: '',

            notFound: "N/A"
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
        <Button
            title="Navigation"
            onPress={() => this.props.navigation.navigate('Home')}
            color='green'
        />
        <TextInput
            style = {styles.searchText}
            placeholder = 'Enter Search Query Here...'
            placeholderTextColor = 'grey'
            onChangeText={search => this.setState({search})}
            onEndEditing = {() => updateSearch(this.state.search)}
            value={this.state.search}
            onSubmitEditing = {() => this.props.navigation.navigate('SearchResults')}
        />
      <ScrollView>
        <Text style={styles.subtitleText}>Top 5 Followers</Text>
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
            search: '',

            userUrl: '',
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
        <Button
            title="Navigation"
            onPress={() => this.props.navigation.navigate('Home')}
            color='green'
        />
        <TextInput
            style = {styles.searchText}
            placeholder = 'Enter Search Query Here...'
            placeholderTextColor = 'grey'
            onChangeText={search => this.setState({search})}
            onEndEditing = {() => updateSearch(this.state.search)}
            value={this.state.search}
            onSubmitEditing = {() => this.props.navigation.navigate('SearchResults')}
        />
              <ScrollView>
                <Text style={styles.subtitleText}>Top 5 Following</Text>
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

/*
* API functions -- used to fetch information from the internet
*/
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
            search: '',
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
        <TextInput
            style = {styles.searchText}
            placeholder = 'Enter Search Query Here...'
            placeholderTextColor = 'grey'
            onChangeText={search => this.setState({search})}
            onEndEditing = {() => updateSearch(this.state.search)}
            value={this.state.search}
            onSubmitEditing = {() => this.props.navigation.navigate('SearchResults')}
        />
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

class SearchScreen extends React.Component
{
constructor(props)
    {
        super(props);
        this.state = {
            github: [],
            search: '',
            repoResults: 0,
            userResults: 0
        }
    }

    componentWillMount(){
        api.getFollowing(searchRepos).then((res) => {
            this.setState({
                github: res,
                repoResults: res.total_count
            })
        });
        api.getFollowing(searchUsers).then((res) => {
            this.setState({
                userResults: res.total_count
            })
        });
    }

  render() {

    searchReposUpdated = searchRepos + '&sort=default';
    searchUsersUpdated = searchUsers + '&sort=default';

    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lightgreen'}}>
        <Button
            title="Navigation"
            onPress={() => this.props.navigation.navigate('Home')}
            color='green'
        />
        <TextInput
            style = {styles.searchText}
            placeholder = 'Enter Search Query Here...'
            placeholderTextColor = 'grey'
            onChangeText={search => this.setState({search})}
            onEndEditing = {() => updateSearch(this.state.search)}
            value={this.state.search}
            onSubmitEditing = {() => this.props.navigation.navigate('SearchResults')}
        />
              <ScrollView>
              <Text style={styles.titleText}>Search Results </Text>
              <Text style={styles.subtitleText}> Total Repo Results for {searchTerm}: {this.state.repoResults} </Text>
              <Text style={styles.subtitleText}> Total User Results for {searchTerm}: {this.state.userResults} </Text>

            <Text>    </Text>
            <Button
                title='Filter Repositories by Relevance'
                color='green'
                onPress={() => updateRepos(0)}
            />
            <Button
                title='Filter Repositories by Updated'
                color='green'
                onPress={() => updateRepos(1)}
            />
            <Button
                title='Go to Repository Results'
                color='darkgreen'
                onPress={() => this.props.navigation.navigate('RepoResults')}
            />
            <Text>    </Text>

            <Button
                title='Filter Users by Relevance'
                color='green'
                onPress={() => updateUsers(0)}
            />
            <Button
                title='Filter Users by Number of Repositories'
                color='green'
                onPress={() => updateUsers(1)}
            />
            <Button
                title='Go to User Results'
                color='darkgreen'
                onPress={() => this.props.navigation.navigate('UserResults')}
            />


              </ScrollView>
      </View>
    );
  }
}

function updateRepos(input)
{
    if (input == 0)
    {
        searchReposUpdated = searchRepos;
    }
    else
    {
        searchReposUpdated = searchRepos + '&sort=updated';
    }
    return;
}

function updateUsers(input)
{
    if (input == 0)
    {
        searchReposUpdated = searchRepos;
    }
    else
    {
        searchReposUpdated = searchRepos + '&sort=repositories';
    }
    return;
}

class RepoResultScreen extends React.Component
{
constructor(props)
    {
        super(props);
        this.state = {
            github: [],
            search: '',
            repoResults: 0,
            repoFirst: '',
            repoSecond: '',
            repoThird: '',
            repoFourth: '',
            repoFifth: '',
            repoSixth: '',
            repoSeventh: ''
        }
    }

    componentWillMount(){
        api.getFollowing(searchReposUpdated).then((res) => {
            this.setState({
                github: res,
                repoResults: res.total_count,
                repoFirst: res.items[0].name + " by "
                + res.items[0].owner.login + ": \n" +
                res.items[0].description + "\n",

                repoSecond: res.items[1].name + " by "
                + res.items[1].owner.login + ": \n" +
                res.items[1].description + "\n",

                repoThird: res.items[2].name + " by "
                + res.items[2].owner.login + ": \n" +
                res.items[2].description + "\n",

                repoFourth: res.items[3].name + " by "
                + res.items[3].owner.login + ": \n" +
                res.items[3].description + "\n",

                repoFifth: res.items[4].name + " by "
                + res.items[4].owner.login + ": \n" +
                res.items[4].description + "\n",

                repoSixth: res.items[5].name + " by "
                + res.items[5].owner.login + ": \n" +
                res.items[5].description + "\n",

                repoSeventh: res.items[6].name + " by "
                + res.items[6].owner.login + ": \n" +
                res.items[6].description + "\n",
            })
        });
    }

  render() {

    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lightgreen'}}>
        <Button
            title="Navigation"
            onPress={() => this.props.navigation.navigate('Home')}
            color='green'
        />
        <TextInput
            style = {styles.searchText}
            placeholder = 'Enter Search Query Here...'
            placeholderTextColor = 'grey'
            onChangeText={search => this.setState({search})}
            onEndEditing = {() => updateSearch(this.state.search)}
            value={this.state.search}
            onSubmitEditing = {() => this.props.navigation.navigate('SearchResults')}
        />
              <ScrollView>
              <Text style={styles.titleText}>Repository Results </Text>
              <Text style={styles.subtitleText}> Total Repo Results for {searchTerm}: {this.state.repoResults} </Text>
              <Text style= {styles.regularText}> • {this.state.repoFirst} </Text>
              <Text style= {styles.regularText}> • {this.state.repoSecond} </Text>
              <Text style= {styles.regularText}> • {this.state.repoThird} </Text>
              <Text style= {styles.regularText}> • {this.state.repoFourth} </Text>
              <Text style= {styles.regularText}> • {this.state.repoFifth} </Text>
              <Text style= {styles.regularText}> • {this.state.repoSixth} </Text>
              <Text style= {styles.regularText}> • {this.state.repoSeventh} </Text>
              </ScrollView>
      </View>
    );
  }
}

class UserResultScreen extends React.Component
{
constructor(props)
    {
        super(props);
        this.state = {
            github: [],
            search: '',
            userResults: 0,

            userUrl: '',
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
        api.getFollowing(searchUsersUpdated).then((res) => {
            this.setState({
                github: res,
                userResults: res.total_count,

                userUrl: res.items[0].url,
                userName: res.items[0].login,
                avatarUrl: res.items[0].avatar_url,

                userUrl1: res.items[1].url,
                userName1: res.items[1].login,
                avatarUrl1: res.items[1].avatar_url,

                userUrl2: res.items[2].url,
                userName2: res.items[2].login,
                avatarUrl2: res.items[2].avatar_url,

                userUrl3: res.items[3].url,
                userName3: res.items[3].login,
                avatarUrl3: res.items[3].avatar_url,

                userUrl4: res.items[4].url,
                userName4: res.items[4].login,
                avatarUrl4: res.items[4].avatar_url,

                notFound: "N/A"


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
        <Button
            title="Navigation"
            onPress={() => this.props.navigation.navigate('Home')}
            color='green'
        />
        <TextInput
            style = {styles.searchText}
            placeholder = 'Enter Search Query Here...'
            placeholderTextColor = 'grey'
            onChangeText={search => this.setState({search})}
            onEndEditing = {() => updateSearch(this.state.search)}
            value={this.state.search}
            onSubmitEditing = {() => this.props.navigation.navigate('SearchResults')}
        />
              <ScrollView>
              <Text style={styles.titleText}>User Results </Text>
              <Text style={styles.subtitleText}> Total User Results for {searchTerm}: {this.state.userResults} </Text>


                <Image source={profilePic} style={{padding:10, width: 200, height: 200}}/>
        {this.state.userName ? (
                <Button
                            title={this.state.userName}
                            onPress={() => changeProfileUrl(newUrl)}
                            color='green'
                        />
        ) : <Text style={styles.regularText}>{this.state.notFound}</Text>}


                <Image source={profilePic1} style={{padding:10, width: 200, height: 200}}/>
        {this.state.userName1 ? (
                <Button
                            title={this.state.userName1}
                            onPress={() => changeProfileUrl(newUrl1)}
                            color='green'
                        />
        ) : <Text style={styles.regularText}>{this.state.notFound}</Text>}

                <Image source={profilePic2} style={{padding:10, width: 200, height: 200}}/>
        {this.state.userName2 ? (
                <Button
                            title={this.state.userName2}
                            onPress={() => changeProfileUrl(newUrl2)}
                            color='green'
                        />
        ) : <Text style={styles.regularText}>{this.state.notFound}</Text>}

                <Image source={profilePic3} style={{padding:10, width: 200, height: 200}}/>
        {this.state.userName3 ? (
                <Button
                            title={this.state.userName3}
                            onPress={() => changeProfileUrl(newUrl3)}
                            color='green'
                        />
        ) : <Text style={styles.regularText}>{this.state.notFound}</Text>}

                <Image source={profilePic4} style={{padding:10, width: 200, height: 200}}/>
        {this.state.userName4 ? (
                <Button
                            title={this.state.userName4}
                            onPress={() => changeProfileUrl(newUrl4)}
                            color='green'
                        />
        ) : <Text style={styles.regularText}>{this.state.notFound}</Text>}

              </ScrollView>
      </View>
    );
  }
}

function updateSearch(input)
{
    searchTerm = input;
    var it = 0, length = input.length;
    for (it; it < length; it++)
    {
        input = input.replace(" ", "+");
    }
    searchRepos = searchTemplateRepos+input;
    searchUsers = searchTemplateUsers+input;

    searchReposUpdated = searchRepos+'&sort=default';
    return;
};

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
    SearchResults:
    {
        screen: SearchScreen
    },
    RepoResults:
    {
        screen: RepoResultScreen
    },
    UserResults:
    {
        screen: UserResultScreen
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
  },
  followingText:
  {
    color: 'navy',
    fontSize: 25,
  },
  searchText:
  {
    backgroundColor: 'darkgreen',
    color: 'white',
    fontSize: 15,
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