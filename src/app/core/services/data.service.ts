import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  getNavMenuItems(): Array<any> {
    return [
      {
        route: "dashboard",
        iconName: "dashboard",
        name: "Dashboard"
      },
      {
        route: "inputs",
        iconName: "stars",
        name: "Inputs"
      },
      {
        route: "dialogs",
        iconName: "face",
        name: "Dialogs"
      }
    ];
  }

  getUrls(): Array<any> {
    return [
      {
        link: "https://feather.netlify.com",
        tags: [
          {
            name: "Icon Sets"
          },
          {
            name: "Design"
          }
        ]
      },
      {
        link: "https://react-smooth-range-input.now.sh/",
        tags: [
          {
            name: "JS"
          },
          {
            name: "React"
          },
          {
            name: "Input Text"
          },
          {
            name: "Library"
          }
        ]
      },
      {
        link:
          "https://css-tricks.com/a-responsive-grid-layout-with-no-media-queries/",
        tags: [
          {
            name: "CSS"
          },
          {
            name: "Grid"
          },
          {
            name: "Layout"
          },
          {
            name: "Useful Tips"
          }
        ]
      },
      {
        link:
          "https://medium.com/js-dojo/how-to-reduce-your-vue-js-bundle-size-with-webpack-3145bf5019b7",
        tags: [
          {
            name: "JS"
          },
          {
            name: "Vuex"
          },
          {
            name: "Performance"
          },
          {
            name: "Optimization"
          }
        ]
      },
      {
        link: "https://feather.netlify.com",
        tags: [
          {
            name: "Icon Sets"
          },
          {
            name: "Design"
          }
        ]
      },
      {
        link: "https://react-smooth-range-input.now.sh/",
        tags: [
          {
            name: "JS"
          },
          {
            name: "React"
          },
          {
            name: "Input Text"
          },
          {
            name: "Library"
          }
        ]
      },
      {
        link:
          "https://css-tricks.com/a-responsive-grid-layout-with-no-media-queries/",
        tags: [
          {
            name: "CSS"
          },
          {
            name: "Grid"
          },
          {
            name: "Layout"
          },
          {
            name: "Useful Tips"
          }
        ]
      },
      {
        link:
          "https://medium.com/js-dojo/how-to-reduce-your-vue-js-bundle-size-with-webpack-3145bf5019b7",
        tags: [
          {
            name: "JS"
          },
          {
            name: "Vuex"
          },
          {
            name: "Performance"
          },
          {
            name: "Optimization"
          }
        ]
      },
      {
        link: "https://feather.netlify.com",
        tags: [
          {
            name: "Icon Sets"
          },
          {
            name: "Design"
          }
        ]
      },
      {
        link: "https://react-smooth-range-input.now.sh/",
        tags: [
          {
            name: "JS"
          },
          {
            name: "React"
          },
          {
            name: "Input Text"
          },
          {
            name: "Library"
          }
        ]
      },
      {
        link:
          "https://css-tricks.com/a-responsive-grid-layout-with-no-media-queries/",
        tags: [
          {
            name: "CSS"
          },
          {
            name: "Grid"
          },
          {
            name: "Layout"
          },
          {
            name: "Useful Tips"
          }
        ]
      },
      {
        link:
          "https://medium.com/js-dojo/how-to-reduce-your-vue-js-bundle-size-with-webpack-3145bf5019b7",
        tags: [
          {
            name: "JS"
          },
          {
            name: "Vuex"
          },
          {
            name: "Performance"
          },
          {
            name: "Optimization"
          }
        ]
      },
      {
        link: "https://feather.netlify.com",
        tags: [
          {
            name: "Icon Sets"
          },
          {
            name: "Design"
          }
        ]
      },
      {
        link: "https://react-smooth-range-input.now.sh/",
        tags: [
          {
            name: "JS"
          },
          {
            name: "React"
          },
          {
            name: "Input Text"
          },
          {
            name: "Library"
          }
        ]
      },
      {
        link:
          "https://css-tricks.com/a-responsive-grid-layout-with-no-media-queries/",
        tags: [
          {
            name: "CSS"
          },
          {
            name: "Grid"
          },
          {
            name: "Layout"
          },
          {
            name: "Useful Tips"
          }
        ]
      },
      {
        link:
          "https://medium.com/js-dojo/how-to-reduce-your-vue-js-bundle-size-with-webpack-3145bf5019b7",
        tags: [
          {
            name: "JS"
          },
          {
            name: "Vuex"
          },
          {
            name: "Performance"
          },
          {
            name: "Optimization"
          }
        ]
      },
      {
        link: "https://feather.netlify.com",
        tags: [
          {
            name: "Icon Sets"
          },
          {
            name: "Design"
          }
        ]
      },
      {
        link: "https://react-smooth-range-input.now.sh/",
        tags: [
          {
            name: "JS"
          },
          {
            name: "React"
          },
          {
            name: "Input Text"
          },
          {
            name: "Library"
          }
        ]
      },
      {
        link:
          "https://css-tricks.com/a-responsive-grid-layout-with-no-media-queries/",
        tags: [
          {
            name: "CSS"
          },
          {
            name: "Grid"
          },
          {
            name: "Layout"
          },
          {
            name: "Useful Tips"
          }
        ]
      },
      {
        link:
          "https://medium.com/js-dojo/how-to-reduce-your-vue-js-bundle-size-with-webpack-3145bf5019b7",
        tags: [
          {
            name: "JS"
          },
          {
            name: "Vuex"
          },
          {
            name: "Performance"
          },
          {
            name: "Optimization"
          }
        ]
      },
      {
        link: "https://feather.netlify.com",
        tags: [
          {
            name: "Icon Sets"
          },
          {
            name: "Design"
          }
        ]
      },
      {
        link: "https://react-smooth-range-input.now.sh/",
        tags: [
          {
            name: "JS"
          },
          {
            name: "React"
          },
          {
            name: "Input Text"
          },
          {
            name: "Library"
          }
        ]
      },
      {
        link:
          "https://css-tricks.com/a-responsive-grid-layout-with-no-media-queries/",
        tags: [
          {
            name: "CSS"
          },
          {
            name: "Grid"
          },
          {
            name: "Layout"
          },
          {
            name: "Useful Tips"
          }
        ]
      },
      {
        link:
          "https://medium.com/js-dojo/how-to-reduce-your-vue-js-bundle-size-with-webpack-3145bf5019b7",
        tags: [
          {
            name: "JS"
          },
          {
            name: "Vuex"
          },
          {
            name: "Performance"
          },
          {
            name: "Optimization"
          }
        ]
      }
    ];
  }
}
