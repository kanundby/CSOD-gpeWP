# gpeWP

These snippets can be used to utilise a more interactive/rich welcome page in Cornerstone OnDemand.

![2022-01-04_Welcome Page_mgr](https://user-images.githubusercontent.com/56861994/148040746-5a08431f-6f42-4535-a1d3-7cb46adde6ce.jpg)

## gpeWelcomePage.html
This file should be included in the **first** widget on the page (type HTML Widget).

## gpeWelcomePage.js
This file should be minified and processed via webpack and then either included in an HTML widget on the page (last widget) OR added via Google Tag Manager.
If you add it to the widget you will need to add <script> </script> in the widget.

## Configuration
1. Create a welcome page or a Custom Page
2. Configure the layout with 0 columns
3. Add HTML Widget and paste the contents from *gpeWelcomePage.html*
4. Add the following CSOD Widgets: Inbox & Actions 

### Custom Widgets currently in scope:
- Inspired by your subjects (LMS)
- Trending for your job (LMS)
- Transcript Overview (LMS)
- Check-Ins (EPM/CAR)
- Goal Progress (EPM/CAR)
- Devplan Progress (EPM/CAR)
- Team Details (CORE)
- Goal Progress Report (EPM/CAR)
- Past Due Report (LMS)
- Total Candidates (ATS)
- New Submissions (ATS)
- New Hires (ATS)
