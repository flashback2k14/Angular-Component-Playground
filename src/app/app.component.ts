import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <div style="display:flex; justify-content: center;">
        <form #form="ngForm" (ngSubmit)="submit(form.value)">
          <yeah-input
            inputTabIndex="1"
            inputType="text"
            placeholderText="Enter your username..."
            labelText="Username"
            name="username"
            ngModel
          ></yeah-input>
          <yeah-input
            inputTabIndex="2"
            inputType="password"
            placeholderText="Enter your password..."
            labelText="Password"
            name="password"
            ngModel
          ></yeah-input>
          <yeah-button type="submit">Login</yeah-button>
        </form>
      </div>

      <yeah-list>
        <yeah-card
          *ngFor="let url of data"
          [url]="url"
          (tagItemClicked)="handleTagItemClicked($event)"
          (deleteButtonClicked)="handleDeleteButtonClicked($event)"
          (editButtonClicked)="handleEditButtonClicked($event)"
        ></yeah-card>
      </yeah-list>
    </div>
  `,
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        width: 500px;
        margin: 12px;
        padding: 12px;
        border-radius: 8px;
        background: #12102e; /*#090821;*/
        color: #ffffff;
        box-shadow: 0 10px 15px -3px #12102e, 0 4px 6px -2px #12102e;
        transition: 0.3s;
      }
      form:hover {
        box-shadow: 0 20px 30px -3px #12102e, 0 8px 12px -2px #12102e;
      }

      form yeah-button {
        display: flex;
        justify-content: flex-end;
        margin: 4px 10px;
      }
    `
  ]
})
export class AppComponent {
  data: any = [
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

  submit(value: any): void {
    console.log(value);
  }

  handleTagItemClicked($event): void {
    alert(JSON.stringify($event, null, 2));
  }

  handleDeleteButtonClicked($event): void {
    alert(JSON.stringify($event, null, 2));
  }

  handleEditButtonClicked($event): void {
    alert(JSON.stringify($event, null, 2));
  }
}
