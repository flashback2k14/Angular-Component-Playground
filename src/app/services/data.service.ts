import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  getNavMenuItems(): Array<any> {
    return [
      {
        route: "login",
        iconName: "face",
        name: "Login"
      },
      {
        route: "dashboard",
        iconName: "dashboard",
        name: "Dashboard"
      },
      {
        route: "profile",
        iconName: "person",
        name: "Profile"
      }
    ];
  }

  getRadioButtonOptions(): Array<any> {
    return [
      {
        id: "rb1",
        text: "Option 1",
        value: "op1",
        isChecked: false
      },
      {
        id: "rb2",
        text: "Option 2",
        value: "op2",
        isChecked: false
      },
      {
        id: "rb3",
        text: "Option 3",
        value: "op3",
        isChecked: false
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
