# **Reviews**

A simple React Project that focuses on the basics of react by handling data and displaying it based on that specific data item's id.

## **Description**

A simple React Project that focuses on the basics of react by handling data and displaying it based on that specific data item's id.The project is about a reviews container that displays various reviews of the people in data.js based on a changeable id.

## **Getting Started**

### Dependencies

- Check package.json for details.
- Git
- Docker(optional)

### Installing

```
git clone https://github.com/axense234/Reviews-REACT.git
```

### Executing program

- **Using NPM**

```
npm install
npm start
```

- **Using Docker**

```
docker build -t reviews-react:0.3.0
docker stop reviews-react-app
docker rm reviews-react-app
docker run -d -p 3000:3000 --name reviews-react-app reviews-react:0.3.0
```

## **Authors**

- **axense234**

## **Version History**

- 0.3
  - Analyzed the code to gather to-do tasks, added Docker and changed a few styles.
- 0.2
  - Simplified react logic and also improved how the website looks by a bit
  - See [commit change](https://github.com/axense234/Reviews-REACT/commits/master) or See [release history](https://github.com/axense234/Reviews-REACT/releases)
- 0.1
  - Initial Release

## **License**

This project is licensed under the GNU License - see the LICENSE.md file for details

## **Acknowledgments**

- Inspired by [_John Smilga 15 React Projects_](https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=8s)
