import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <div style="display:flex; justify-content: center;">
        <form #form="ngForm" (ngSubmit)="submit(form.value)">
          <yeah-input
            inputId="txtUsername"
            inputTabIndex="1"
            inputType="text"
            placeholderText="Enter your username..."
            labelText="Username"
            name="username"
            ngModel
          ></yeah-input>
          <yeah-input
            inputId="txtPassword"
            inputTabIndex="2"
            inputType="password"
            placeholderText="Enter your password..."
            labelText="Password"
            name="password"
            ngModel
          ></yeah-input>
          <yeah-textarea
            inputId="txtarea"
            inputTabIndex="3"
            placeholderText="Enter your multiline..."
            labelText="Multiline"
            rowCount="7"
            name="area"
            ngModel
          ></yeah-textarea>
          <yeah-button type="submit">Login</yeah-button>
        </form>
      </div>

      <yeah-search></yeah-search>

      <yeah-list>
        <yeah-card
          *ngFor="let url of data"
          [url]="url"
          (selectedTagItem)="handleSelectedTagItem($event)"
          (deleteTagItem)="handleDeleteTagItem($event)"
          (deleteUrlItem)="handleDeleteUrlItem($event)"
          (editUrlItem)="handleEditUrlItem($event)"
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
        padding: 24px;
        border-radius: 8px;
        background: #12102e;
        color: #ffffff;
        box-shadow: 0 10px 15px -3px #12102e, 0 4px 6px -2px #12102e;
        transition: 0.3s;
      }
      form:hover {
        box-shadow: 0 20px 30px -3px #12102e, 0 8px 12px -2px #12102e;
      }

      form yeah-input,
      form yeah-textarea {
        margin-bottom: 12px;
      }

      form yeah-button {
        display: flex;
        justify-content: flex-end;
        margin: 4px;
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

  submit($event: any): void {
    this._showAlert($event);
  }

  handleSelectedTagItem($event: any): void {
    this._showAlert($event);
  }

  handleDeleteTagItem($event: any): void {
    this._showAlert($event);
  }

  handleDeleteUrlItem($event: any): void {
    this._showAlert($event);
  }

  handleEditUrlItem($event: any): void {
    this._showAlert($event);
  }

  private _showAlert(value: any): void {
    alert(JSON.stringify(value, null, 2));
  }
}
