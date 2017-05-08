# Public

----

## 1. [GET] Recover Password



### PATH

  _The URL or URN oe URI  Structure (path only, no root url)_

  * #### URL:

    ```javascript
      `/api/${v}/recover-password/`
    ```

  * #### Method: `POST`



### REQUEST

  <!--  -->

  * #### Content:

    ```json
      {
        "email": "",
      }
    ```



### RESPONSE

  * #### Success:

    _What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_

    __Code:__ 200 OK <br />
    __Content:__

    ```json
    {
      "success": true
    }
    ```


  * #### Error:

    _Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be_

    __Code:__ 404 - NOT FOUND <br />
    __Description:__ If there are no results



<!-- ### Notes:

  This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here. -->
