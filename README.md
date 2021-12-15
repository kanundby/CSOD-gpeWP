# gpeWP

These snippets can be used to utilise a more interactive/rich welcome page in Cornerstone OnDemand.
The two files (html & js) are to be used together but in different HTML widgets.

The script will check what access the logged in user has and will automatically display the widgets based on access and also what has been added in *accessURLs*.

![2021-12-08_Welcome Page - IC](https://user-images.githubusercontent.com/56861994/145351840-1be9a34c-b156-4d5a-8eb9-5c88f1e374df.jpg)

## gpeWelcomePage.html
This file should be included in the **first** widget on the page (type HTML Widget).

## gpeWelcomePage.js
This file should be included in the **last** widget on the page (type HTML Widget).
You will need to add <script> </script> in the widget.

## Configuration
1. Create a welcome page or a Custom Page
2. Configure the layout with 0 columns
3. Add HTML Widget and paste the contents from *gpeWelcomePage.html*
4. Add ALL standard widgets
5. Add HTML Widget in the end of all other widgets and paste the contents from *gpeWelcomePage.js*

### Custom Widgets currently in scope:
- Transcript
- Action items
- Checkins
- Goal progress
- DevPlan progress
- Connect Feed

