      Project: Implement an app with React | Holberton Laval, France Intranet

**Introduction**

Hello everyone, In this project you will build our pocket movie app in which we will keep track of our favorite movies and set up a watch later list. You will use the ReactJs knowledge that you accumulated in previous projects to build the interface and show data from an API.

**Read or watch**

*   [React Hooks](/rltoken/ZSej69n9DYRaIHD7ZkUQmw "React Hooks")
*   [React Font Awesome](/rltoken/gfwi3mFzpg2d7PjM4f84vQ "React Font Awesome")
*   [React Router](/rltoken/tg6RrdsHh-wLVhbz9V0Z2Q "React Router")
*   [axios](/rltoken/TNyBTmqmATXcUsibVVR4Pg "axios")
*   [ES6](/rltoken/MOmJDQwo01Gw-l1T3e7w2g "ES6")
*   [JWT Authentication](/rltoken/TR0lgcFraHQHWHL--mkwvg "JWT Authentication")

**Learning Objectives**

*   Manage state and props in a react component
*   Use React hooks to achieve certain behavior
*   Implement a design with JSX and CSS (React)
*   Implement a frontend app with React

**Requirements**

*   Class components are not allowed
*   A README.md file, at the root of the folder of the project, is mandatory
*   Try to use ES6 features

**Setting up the backend**

*   Installing `docker`
    *   This [link](/rltoken/aMd8Yn_BmPEG77waqRBk3w "link") has all the steps needed for installing docker depending on your system.
*   Installing `docker-compose`
    *   Official [documentation](/rltoken/d3ALWzmPUvRrEqyM-TV-ug "documentation") for installing docker-compose
*   Make sure that docker is running before proceeding
*   Cloning and running the backend server

    *   Clone this [repository](/rltoken/am9ibwy00aOWj-vTwYXFqw "repository") on your local machine
    *   `cd` into the repository folder and run the following commands:
        *   `docker-compose build --no-cache --force-rm`
        *   `docker-compose up`
        *   After running the above command you should get an output similar to this indicating that the backend and db are running. ![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/af62bcfe76602df6a97d54316323e74d7763d666.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a88c4b781a87920dd3cb61a238c305386d2add366c36dca731127d51ae20e461)

    **Notes**

*   You’ll be adding the base url before each API route mentioned in the tasks: `http://localhost:8000/`

*   The [repository](/rltoken/am9ibwy00aOWj-vTwYXFqw "repository") contains detailed information about each route in the API


Tasks
-----

### 0\. Cloning the Figma project

mandatory

Create an account in [Figma](/rltoken/nq3cXX07u5eAmv8iTOzBvg "Figma") if you don’t have one and open [this project](/rltoken/vCrxNZGTzGgATxlLfPl09g "this project") and “Duplicate to your Drafts” to have access to all design details.

If you can’t access it, please find here the [Figma file](/rltoken/n5y7eqU19eHH2MBPIms1Sg "Figma file").

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/58de24af3384ecb909b6df472d9f284fa781963d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d6a1e3cae8613b77a61cb9781e708887182560f9e77e80831fb9bd8ab5db6d47)

**_All the components designs that we will be working on could be found in the Figma file._**

#### Add URLs here:

 Save

**Repo:**

*   GitHub repository: `holbertonschool-cinema-guru`

**0/1** pt

### 1\. Setting up the workspace

mandatory

In this project, we will use the `yarn` package manager instead of npm.

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install --no-install-recommends yarn
yarn --version

*   Using `yarn create` create your React app.
*   Remove all the unnecessary files and their respective imports. `src/App.test.js`,`src/reportWebVitals.js`, `src/setupTests.js`, `src/logo.svg`
*   Make sure your App component returns an empty `div` with `className="App"`

**Packages**

This is the list of packages we will need throughout this project:

*   `@fortawesome/fontawesome-svg-core 6.1.0`
*   `@fortawesome/free-solid-svg-icons 6.1.0`
*   `@fortawesome/react-fontawesome 0.1.18`
*   `axios 0.26.1`
*   `lodash 4.17.21`
*   `normalize.css 8.0.1`

Install them and make sure they’re added as dependencies.

**Project Structure**

This will be the general folder structuring.

*   `public/`
*   `src/`
    *   `assets/`
    *   `components/`
    *   `routes/`

**_Make sure all your source files are under the repository root and not under a subdirectory._**

**Repo:**

*   GitHub repository: `holbertonschool-cinema-guru`
*   File: `README.md, package.json, public/, src/assets/, src/components, src/routes, src/App.js`

**0/4** pts

### 2\. Adding the general use components

mandatory

In this task we will add various general components that we will be using almost in every major component.

**Input**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/0ce23be04595b57cae3e1874ad4cf55eac506781.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f1dc3bb2b12296248eb13c1e6f4e87f2beb2fbbb7ece1ec8f26e03043d2f3282)

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/a57c34c985df24911cc8ce8e45abfac42ed419ef.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=69224479253d4c877bd7d60ded115b597da802d65eab284c4cfdc42fcd89a185)

Create `src/components/general/Input.js`:

*   The file should import `general.css`
*   The file should export a functional component named `Input` as default:
    *   Input must accept these props:
        *   `label`: String – The input label
        *   `type`: String – Input type
        *   `className`: String – Input custom classes
        *   `value`: Any – The controlled state
        *   `setValue`: Function – The setState function of the above state.
        *   `icon`(optional): FontAwesomeIcon – An icon to decorate the input with.
        *   `inputAttributes`(optional): Object – Other input attributes
*   Input’s return value must contain a html input with the appropriate attributes from the props.
*   Create `handleInput` function that takes the `onChange` event as parameter and sets the value to the event target value using the `setValue` prop and pass it to the input `onChange` event.

**SelectInput**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/259edec2bf177c56e6e57516ff759bf1f53af87f.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=87fece4b0a8db188d34a2af796b0916d0bc1d0d54d89acb882b263ea21b84abd)

Create `src/components/general/SelectInput.js`:

*   The file should import `general.css`
*   The file should export a functional component named `SelectInput` as default:
    *   SelectInput must accept these props:
        *   `label`: String – The input label
        *   `options`: Array – Array of select options
        *   `className`: String – SelectInput custom classes
        *   `value`: Any – The controlled state
        *   `setValue`: Function – The setState function of the above state.
*   SelectInput’s return value must contain a html select tag with the appropriate attributes from the props.
    *   Inside the select tag, map each option from the options prop to return an option tag with the appropriate attributes and text inside.
*   Create `handleSelect` function that takes the `onChange` event as parameter and sets the value to the event target value using the `setValue` prop and pass it to the select `onChange` event.

**Button**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/734b5a926124ab328836b428aaa75e4021aa3ac4.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=2a63187000eca8ac7b04b4d8386605b7314c834c8c9a406689216626f613bd89)

Create `src/components/general/Button.js`:

*   The file should import `general.css`
*   The file should export a functional component named `Button` as default:
    *   Button must accept these props:
        *   `label`: String – The button label
        *   `className`: String – Button custom classes
        *   `onClick`: Function – The onClick handler for the button.
        *   `icon`(optional): FontAwesomeIcon – An icon to decorate the button with.
*   Button’s return value must contain a html button tag with the appropriate attributes from the props.
    *   Inside the button tag, there should be a FontAwesomeIcon if provided and the button text.
*   Bind the button `onClick` event with the `onClick` function passed from the props.

**SearchBar**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/8b994ddfd100096b15e0b17a3aadf272bca35858.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ea23efb9acac9028cdf16290ecc4cd276f080012c0fe4cf263f80886f0fd7bdd)

Create `src/components/general/SearchBar.js`:

*   The file should import `general.css`
*   The file should export a functional component named `SearchBar` as default:
    *   Button must accept these props:
        *   `title`: String – The controlled state
        *   `setTitle`: String – The setState function of the above state.
*   SearchBar’s return value must contain a html input with the appropriate attributes from the props.
*   Create `handleInput` function that takes the `onChange` event as parameter and sets the value to the event target value using the `setTitle` prop and pass it to the input `onChange` event.

**general.css**

Create `src/components/general/general.css`:

*   Add the necessary css rules to assure the components design provided in Figma.

**Repo:**

*   GitHub repository: `holbertonschool-cinema-guru`

**0/56** pts

### 3\. Initialize the main App component

mandatory

Now we will add the main App comonent that will host all of the others.

**App**

Edit `src/App.js`:

*   The file should import `App.css`
*   The file should export a functional component named `App` as default:
    *   Add the following state to the component using the `useState` hook:
        *   `isLoggedIn`Boolean default: `false`
        *   `userUsername`string default: `""`
    *   use the `useEffect` hook to do the following whenever the component mounts:
        *   Get the value of `accessToken` item from the `localStorage`
        *   Send a post request to `/api/auth/` with the `authorization` header set to `Bearer <accessToken>`
            *   `onSuccess` set the isLoggedin and the userUsername state to true and the username from the response object respectively
    *   App must return depending on the isLoggedIn state :
        *   `true`: The Dashboard component (Will be built in later tasks)
        *   `false`: The Authentication component (Will be built in later tasks)

**Repo:**

*   GitHub repository: `holbertonschool-cinema-guru`

**0/7** pts

### 4\. Authentification - Component behavior

mandatory

In this task we will add the three main authentication components `Authentication Login Register`

**auth.css**

Create `src/routes/auth/auth.css`:

This file would host all the css needed for the authentication components.

**Authentication**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/c8cc9c97a422d8bdaa459b10936939c745b49266.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c3b645646d1ec34b146bce781c4c9e056f7beb43b3fd41b1d502be936532f021)

The `Authentication` component will be the parent of the two other mentioned component. It will allow us to switch between logging in or registering when clicking the header buttons.

Create `src/routes/auth/Authentication.js`:

*   The file should import `auth.css`
*   The file should export a functional component named `Authentication` as default:

    *   Authentication must accept these props:
        *   `setIsLoggedIn`: function – The setState for the isLoggedin state
        *   `setUserUsername`: function –The setState for the userUsername state
    *   Add the following state to the component using the `useState` hook:
        *   `_switch`Boolean default: `true`
        *   `username`string default: `""`
        *   `password`string default: `""`
    *   Authentication must return a html `form` in which there’s two `Buttons`:
        *   Sign In: When clicked sets the `_switch` state to `true`
        *   Sign Up: When clicked sets the `_switch` state to `false`

    **Login**


![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/45fa8547ab6ef93d30964ccd300d9bc807419586.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=daaa9d2400b12efc2321af0dc9e3914bf177d348878111f3ee806cfd1b9a2267)

The `Login` will host the components needed to login.

Create `src/routes/auth/Login.js`:

*   The file should import `auth.css`
*   The file should export a functional component named `Login` as default:

    *   Login must accept these props:
        *   `username`: string – The username controlled state
        *   `password`: string – The password controlled state
        *   `setUsername`: function – The setState for the username state
        *   `setPassword`: function –The setState for the password state
    *   Login must return:
        *   Two Inputs for the username and password
        *   A Button for submit

    **Register**


![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/d6ff27edfe7ca23cc735c15e8d1cebcb816b7743.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d8ed3dd5f187be2e79a8997a28f43e6d2cc024dc457a2c2a54ce9c37b6607cfc)

The `Register` will host the components needed to register.

Create `src/routes/auth/Register.js`:

*   The file should import `auth.css`
*   The file should export a functional component named `Register` as default:
    *   Authentication must accept these props:
        *   `username`: string – The username controlled state
        *   `password`: string – The password controlled state
        *   `setUsername`: function – The setState for the username state
        *   `setPassword`: function –The setState for the password state
    *   Register must return:
        *   Two Inputs for the username and password
        *   A Button for submit

In `src/routes/auth/Authentication.js`: \* import `Login` and `Register` \* Added the necessary code to render the `Login` component whenever `_switch` is `true` otherwise render `Register`

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/d41d45e9768679fd0109288442578ae138830087.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3e977f4911ea66fd5d8de59e19a759c65f029ea74d5b7682f69660b7d74a39dd)

**Repo:**

*   GitHub repository: `holbertonschool-cinema-guru`

**0/39** pts

### 5\. Authentification - Api integration

mandatory

In this task, will add the necessary logic to finalize the authentication process.

*   in `src/routes/auth/Authentication.js`:
    *   Create `handleSubmit` function:
        *   handleSubmit takes the `onSubmit` event as parameter.
        *   use the `preventDefault` event method to disable the default behavior of the form
        *   Depending on the \_switch state:
            *   `true`: using `axios` send a post request to `/api/auth/login` route with `username` and `password` from the component state as body data.
            *   `false`: using `axios` send a post request to `/api/auth/register` route with `username` and `password` from the component state as body data.
            *   `onSuccess` we will get a response containing a jwt access token.
                *   Store the token in the `localStorage`
                *   Set the userUsername state to username
                *   Set the isLoggedIn state to true
    *   Bind the `handleSubmit` function to the form `onSubmit` event

**Repo:**

*   GitHub repository: `holbertonschool-cinema-guru`

**0/7** pts

### 6\. Navigation - Adding the header

mandatory

In this task we will start building the Dashboard component.

**dashboard.css**

Create `src/routes/dashboard/dashboard.css`:

This file would host all the css needed for the dashboard components.

**navigation.css**

Create `src/components/navigation/navigation.css`:

This file would host all the css needed for the navigation components.

**Header**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/70dd9b3d7c9d329c432558dfe24bccf0996133ef.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f20e540415fe85e1c93eb48195ba85bcefad5ca76caa2be3bff574d4858df83c)

Create `src/components/navigation/Header.js`:

*   The file should import `navigation.css`
*   The file should export a functional component named `Header` as default:
    *   Header must accept these props:
        *   `userUsername`: string – The state for the username
        *   `setIsLoggedIn`: function –The setState for the isLoggedin state
    *   Header must return a html `nav` containing these elements and others:
        *   `img`: `src="https://picsum.photos/100/100"` for random avatars
        *   `p`: Welcoming the user using the `userUsername` state
        *   `span`: with an icon and logout text
    *   Create `logout` function in which:
        *   Remove the `accessToken` item from `localStorage`
        *   Set isLoggedIn state to false
    *   Bind the `logout` function the the logout span’s `onClick` event.

**Dashboard**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/7c73df3bc581c1251ba780f2853c39caf78ca725.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c3105da94d7a14e43ec8fe592a8ad679ba640a314eb26bcf39ae3aacc54fd3f5)

Create `src/routes/dashboard/Dashboard.js`:

*   The file should import `dashboard.css`
*   The file should import the Header component
*   The file should export a functional component named `Dashboard` as default:
    *   Dashboard must accept these props:
        *   `userUsername`: string – The state for the username
        *   `setIsLoggedIn`: function –The setState for the isLoggedin state
    *   Dashboard must return a html `div` containing these elements and others:
        *   Add the Header component to Dashboard return value passing to it the `userUsername` and `setIsLoggedIn` as props

**Repo:**

*   GitHub repository: `holbertonschool-cinema-guru`

**0/18** pts

### 7\. Navigation - Sidebar

mandatory

In this task we will add another component to facilitate navigating through the app even more

**auth.css**

Create `src/components/components.css`:

This file would host all the css needed for miscellaneous components.

**Activity**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/6315648104bee14b10341e8d91ece065c70a0db2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=436f1d935c2f01136acb961caa16a7d82459c5ee154a4882ec4d67d06b1318d6)

The `Activity` component will help us show the recent activities.

Create `src/components/Activity.js`:

*   The file should import `components.css`
*   The file should export a functional component named `Activity` as default:
    *   Activity must return a html `li` containing these elements and others:
        *   `p`: Formatted sentence according to the activity (see design)

**SideBar**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/4785e3d2e3b700e8a62ab91bad138eb9e8bd5b69.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4f0c2551b213fffd13115be4bc64146c7e4969fac07b77c8356550ffb7141f50)

The `SideBar` component will be a key component for better navigation.

Create `src/components/navigation/SideBar.js`:

*   The file should import `navigation.css`
*   The file should export a functional component named `SideBar` as default:
    *   Add the following state to the component using the `useState` hook:
        *   `selected`string default: `"home"`
        *   `small`boolean default: `true`
        *   `activities`array default: `[]`
        *   `showActivities`boolean default: `false`
    *   Create `setPage` function:
        *   `setPage` takes one parameter `pageName`
        *   `setPage` sets the `selected` state to `pageName`
        *   using the `useNavigate` hook, redirect the user to the desired page
            *   “Home” => `/home`
            *   “Favorites” => `/favorites`
            *   “Watch Later” => `/watchlater`
    *   Using the `useEffect` hook:
        *   Send a get request using axios to `/api/activity`. on Success set the activities state to the response data.
    *   Authentication must return a html `nav` containing these elements and others:
        *   Navigation `ul`:
            *   Contains three `li` with an icon corresponding to the design and the following text `"Home"` `"Favorites"` `"Watch Later"`, then bind the li’s onClick event to `setPage` function passing the corresponding `pageName`
        *   Activity `ul`:
            *   Map the first 10 values from the activities state to the Activity component.

In `src/routes/dashboard/Dashboard.js`:

*   Import the SideBar component and style it according to the design

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/2deafc208489228ea05dcd25e93f16d5c9f84de5.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9cd58e32c02c52fdded128480da98d91fd59c2f40285076b26c2c75d070036fe)

**Repo:**

*   GitHub repository: `holbertonschool-cinema-guru`

**0/30** pts

### 8\. Dashboard routing

mandatory

Now we’ll add the routing.

**Dashboard**

Edit `src/routes/dashboard/Dashboard.js`:

*   Import `BrowserRouter`, `Routes`, `Route`, `Navigate` from `react-router-dom`
*   Wrap the return value of the Dashboard component in a `BrowserRouter`
*   Add a Routes component. Inside it add:
    *   `Route` to path `/home` that should render the `HomePage` component (Will be created in a later task)
    *   `Route` to path `/favorites` that should render the `Favorites` component (Will be created in a later task)
    *   `Route` to path `/watchlater` that should render the `WhatchLater` component (Will be created in a later task)
    *   `Route` for all other paths that redirects the user to `/home` using the `Navigate` component

**Repo:**

*   GitHub repository: `holbertonschool-cinema-guru`

**0/5** pts

### 9\. Dashboard - Setting up child components

mandatory

For the dashboard we will need four essential components which will be used in each of our pages.

**movies.css**

Create `src/components/movies/movies.css`:

This file would host all the css needed for the movies components.

**Tag**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/d6b96fc9905015359ed859cd9f16246640550ce8.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6ec788e2299e3b1fc415094bc86aa9f441fa85e65651ded8375551902359cbcc)

Create `src/components/movies/Tag.js`:

*   The file should import `movies.css`
*   The file should export a functional component named `Tag` as default:
    *   Tag must accept these props:
        *   `genre`: string – The genre name
        *   `filter`: boolean – Indicates if the Tag is used in a filter
        *   `genres`: array – The state containing the list of genres
        *   `setGenres`: function – The setState for the above state
    *   Tag must return a html `li` with the genre name displayed
    *   Add the following state to the component using the useState hook:
        *   `selected`: Boolean – Indicates if the tag is selected
    *   Create `handleTag` function in which:
        *   If `selected` is `true` removes the genre from `genres` using the `setGenres` then sets the selected state to `false`
        *   If `selected` is `false` adds the genre in the `genres` using the `setGenres` then sets the `selected` state to `true`
    *   Bind the `handleTag` function to the li’s `onClick` event

**Filter**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/d38abb13ab1cba256cf05561bf20a3d1bf6fc491.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f880e0d33a78c0424574aa1c0426a5bc5b6ba1f45b84a963ca963e52ff77d79c)

Create `src/components/movies/Filter.js`:

*   The file should import `movies.css`
*   The file should export a functional component named `Filter` as default:
    *   Filter must accept these props:
        *   `minYear`: number – The minimum year state
        *   `setMinYear`: function – The setState for the above state
        *   `maxYear`: number – The maximum year state
        *   `setMaxYear`: function – The setState for the above state
        *   `sort`: string – the sort by state
        *   `setSort`: function – The setState for the above state
        *   `genres`: string – The selected genres state
        *   `setGenres`: function – The setState for the above state
        *   `title`: string – The title search state
        *   `setTitle`: function – The setState for the above state
    *   Filter must return a html `div` with the following components included:
        *   SearchBar: `title` and `setTitle` as props
        *   Two Inputs: One for the minimum year, the other for the maximum year
        *   SelectInput: Containing the following sorting options `latest`, `oldest`, `highestrated`, `lowestrated`
        *   List of all the following tags mapped to the Tag component action, drama, comedy, biography, romance, thriller, war, history, sport, sci-fi, documentary, crime, fantasy

**MovieCard**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/21a11fe0f3c984c1845a0607d753d43b52f349db.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9618390f2b9d9ce6700993862b0e811be4781a3d18abf4ac837178b24bc1c1d4)

Create `src/components/movies/MovieCard.js`:

*   The file should import `movies.css`
*   The file should export a functional component named `MovieCard` as default:
    *   MovieCard must accept these props:
        *   movie: object – A movie object
    *   MovieCard must return a html `li` with the following components included:
        *   Two FontAwesomeIcon: One for favoriting a movie the other for adding to watch later list
        *   The movie title, synopsis and all the genres
    *   Add the following state to the component using the `useState` hook:
        *   `isFavorite`: Boolean – default `false`, will be used to render the necessary designs if the movie is already in the user’s favorites
        *   `isWatchLater`: Boolean – default `false`, will be used to render the necessary designs if the movie is already in the user’s watch later
    *   Use the `useEffect` hook:
        *   To send a get request to the following routes`/api/titles/favorite/`, `/api/titles/watchlater/` in order to get the user’s list of favorites and watch later titles
        *   Set the `isFavorite` and `isWatchLater` state depending on if the movie exists in the above lists
    *   Create `handleClick` function:
        *   `handleClick` takes a string `type` parameter determining if the click is add to favorites or watch later
        *   Depending on the type and the state, send a post or delete request to one of the following routes `/api/titles/<type>/<movie imdbId>`
            *   `type` could be either `favorite` or `watchlater`
            *   Set the component states accordingly
    *   Bind the `handleClick` function to each icon’s `onClick` event with the corresponding type `"favorite"` or `"watchlater"`

**Repo:**

*   GitHub repository: `holbertonschool-cinema-guru`

**0/39** pts

### 10\. Dashboard - Main pages

mandatory

Now that we have all the necessary components to structure our up, all what is needed is to build our main pages.

**HomePage**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/81d9e87f7750641fc917e47918378677e6fa55d1.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6fa24ee736d27e141a234dec2f0136d25f8ea5b1f7297963738b24a7cc0e495c)

Create `src/routes/dashboard/HomePage.js`:

*   The file should import `dashboard.css`
*   The file should import MovieCard, Filter, Button components
*   The file should export a functional component named `HomePage` as default:
    *   Add the following state to the component using the useState hook:
        *   `movies`: array, default: `[]`
        *   `minYear`: number, default: `1970`
        *   `maxYear`: number, default: `2022`
        *   `genres`: array, default: `[]`
        *   `sort`: string, default: `""`
        *   `title`: string, default: `""`
        *   `page`: number, default: `1`
    *   Dashboard must return a html `div` containing these elements and others:
        *   Filter with all it’s necessary props passed from state
        *   Map each object of the movies state to MovieCard component
        *   Button with the text`"Load More.."` for loading more titles
    *   Create `loadMovies`:
        *   `loadMovies` takes a page parameter which refer to which page to query
        *   Send a get request to `/api/titles/advancedsearch` route with the following states as parameters:
            *   `minYear` Filter for the minimum year
            *   `maxYear` Filter for the maximum year
            *   `genres` Filter for the genres
            *   `title` Filter for the movie/show title
            *   `sort` Sort by
        *   Use the `useEffect` hook to call `loadMovies` on component mount
        *   Make sure that the `useEffect` fires on every filtering/sorting state change
        *   Bind the `onClick` event of the `Load More..` button

**Favorites**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/2a9babc2b5bad6750e6cf8c740fc6478e8cf4101.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5f411941b772c87c1c247901f19ed8dadd6ae5b97b0b0098cd6a90b89b47e307)

Create `src/routes/dashboard/Favorites.js`:

*   The file should import `dashboard.css`
*   The file should import MovieCard component
*   The file should export a functional component named `Favorites` as default:
    *   Add the following state to the component using the useState hook:
        *   `movies`: array, default: `[]`
    *   Favorites must return a html `div` containing these elements and others:
        *   `h1` with the text `Movies you like`
        *   Map each object of the movies state to MovieCard component
        *   Use the `useEffect` hook to:
            *   Send a get request to `/api/titles/favorite/`
            *   `onSuccess` set the movies state to the data from the response

**WatchLater**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/1d57645a71879e413906ec061eaf407b0c2e7832.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241021%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241021T074600Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f46097292a12c75367c2292cecfef140b8da370ad06f56d4298b05ff882ce86e)

Create `src/routes/dashboard/WatchLater.js`:

*   The file should import `dashboard.css`
*   The file should import WatchLater component
*   The file should export a functional component named `WatchLater` as default:
    *   Add the following state to the component using the useState hook:
        *   `movies`: array, default: `[]`
    *   WatchLater must return a html `div` containing these elements and others:
        *   `h1` with the text `Movies you like`
        *   Map each object of the movies state to MovieCard component
        *   Use the `useEffect` hook to:
            *   Send a get request to `/api/titles/watchlater/`
            *   `onSuccess` set the movies state to the data from the response

**Repo:**

*   GitHub repository: `holbertonschool-cinema-guru`

**0/33** pts
