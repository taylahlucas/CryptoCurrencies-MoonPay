# Implementation:

### Q) What libraries did you add to react-native? What are they used for?

The following packages were added:

- expo: Used to run the application
- axios: HTTP client, used over 'fetch' due to simpler and cleaner api

State management:
- react-redux
- @reduxjs/toolkit

Testing:
- jest 
- @types/jest
- @testing-library/react-native
- @testing-library/jest-native
- @babel/core 
- @babel/preset-env
- jest-expo

### Q) What's the command to start the application locally?

npx expo start

To run tests:
npm test

### Q) Any other comments we should read before evaluating your solution?

// TODO:

---

# General:

### Q) If you had more time, what further improvements or new features would you add?

If I had more time, I would:
- Add tests for each component.
- Add endpoint string into .ENV file
- Improve the UI buy adding checkboxes for 'Supported in US/Test'.
- Import icons and use an IconButton for 'Shuffle' functionality.
- Add a styled header with the page title.
- I would used StyledComponents for majority of styles, as opposed to StyleSheet.

### Q) Which parts are you most proud of? And why?

I'm happy with the code structure and the simplicity of the components, which I've attempted to adhere to SOLID principle. I believe it maintains readability and allows for simple testing/debugging.
I have generalised the components which are expected to be reused in different forms, (see components in components/general), making it easy to maintain consistency across the UI and speed up development.

### Q) Which parts did you spend the most time with? What did you find most difficult?

I spent the most time writing and testing the logic of the app, ensuring it works for each use case and checking that each functionality visually made sense to the user.
I found configuring the tests the most difficult aspect since it was my first time configuring the combination of expo, redux and jest.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.

Overall the test and instructions were simple and straightforward.