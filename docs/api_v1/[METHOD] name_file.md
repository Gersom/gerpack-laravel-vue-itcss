# Title

----

## 1. [GET] Home



### PATH

  _The URL or URN oe URI  Structure (path only, no root url)_

  * #### URL:
    ```javascript
      `/api/${VERSION}/items/`
      `/api/${VERSION}/items?sector_id={}`

      `/api/${VERSION}/items`

      `/api/${VERSION}/items/${id}`

      `/api/${VERSION}/items/${id}`
    ```

  * #### Method: `GET` | `POST` | `DELETE` | `PUT`

  * #### Params

    <!-- _If URL params exist_  -->

    * __Required:__

      `id=[integer]` <br />

    * __Optional:__

     `category=[alphanumeric]` <br />

  * #### Queries

    <!-- _If URL params exist_  -->

    * __Required:__

      `height=[integer]` <br />

    * __Optional:__

      `width=[integer]` <br />


### HEADERS

  <!--  -->

  * #### Content:

    ```json
      {
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "csrftoken": "{TOKEN}",
          "language": "es"
        }
      }
    ```

### REQUEST

  <!--  -->

  * #### Content:

    ```json
      {
        "username": "",
        "password": "[NUMBER]"
      }
      ```

### RESPONSE

  * #### Success:

    _What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_

    __Code:__ 200 OK <br />
    __Content:__

    ```json
    {
      "data": [
        {
          "id": "",
          "imageUrl": ""
        }
      ]
    }
    ```


  * #### Error:

    _Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be_

    __Code:__ 404 - NOT FOUND <br />
    __Description:__ If there are no results
    __content:__

    ```json
    {
      "error": "",
      "message": ""
    }
    ```

   OR

    __Code:__ 401 - UNAUTHORIZED <br />
    __Description:__ If you are not logged in



<!-- ### Notes:

  This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here. -->
