# GreenHouse

[Deployed Site](https://green-house-adirondack-phoenix.netlify.app/)

Team Members:

- Amber Moore
- Dean Leong
- Geoff LaPorte
- Sutton Demlong - git Czar

# Whimsical

[GreenHouse Site-map](https://whimsical.com/DAFyM5GeQsxhFRbMy1o3vc)

# UX Resources

- [Zeplin](https://scene.zeplin.io/project/5f833bd744cc2c76806cf9d5)
- [Assets](https://drive.google.com/drive/folders/1oh87-jQwjmIavc8ufYE9hCJsMJByLfWa)
- [Desktop-Mockup](https://www.figma.com/proto/3naVRlnr4qOC9iqisHTDZV/p3b-Mid-Fidelity?node-id=475%3A2&viewport=292%2C1155%2C0.08796175569295883&scaling=min-zoom)
- [Mobile-Mockup](https://www.figma.com/proto/3naVRlnr4qOC9iqisHTDZV/p3b-Mid-Fidelity?node-id=551%3A9927&viewport=611%2C1489%2C0.13151338696479797&scaling=scale-down)

# Team Expectations

[GoogleDoc](https://docs.google.com/document/d/1qyXwMCpHjvtyT953FGs_HHTLHkv3G3pF0_bKpM_sebc/edit?usp=sharing)

# Overview

GreenHouse is an app that allows users to keep track of their energy savings based on the equipment they have purchased for their house. The home page includes options for messaging experts, exploring articles related to environmentally friendly homes and browsing energy/cost/water saving equipment.

For the first iteration, our team will build out the landing page with full CRUD capabilities built around the "articles" feature. The second iteration will include a library of equipment and the dashboard concept.

# Schema

```javascript
const Article = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);
```

# MVP

[GreenHouse WorkFlow](https://github.com/suttondemlong/green-house/projects/1)

# Post-MVP

- Create concept of one instance of a "User"
- Create DB instances for "Equipment"
- Execute Equipment page
- Execute Dashboard page
- Create functionality of "Add Equipment"
- Create JS dynamic update of dashboard information (i.e. Cost Savings, Water Savings, Energy Savings, etc.)
