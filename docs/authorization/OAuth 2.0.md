# OAuth 2.0

----

## 1. Created Token



### PATH

  * #### URL:

  ```javascript
    `/oauth/token`
  ```

  * #### Method: `POST`


### REQUEST

  * #### Content:

  ```json
    {
      "client_id" : 1,
      "client_secret" : "{k8cdDKNruUd0IXbuOUgdoFhCpG}",
      "grant_type" : "password",
      "password" : "123456",
      "scope" : "",
      "username" : "usuario@noveltie.com"
    }
  ```

### RESPONSE

  * #### Success:

    __Code:__ 200 OK <br />
    __Content:__

    ```json
    {
      "token_type": "Bearer",
      "expires_in": 31536000,
      "access_token": "[..]eyJ0eXAiOiJY[..]",
      "refresh_token": "[..]BReCl8nXbicyet3Mkqf4gLu9N3[..]"
    }
    ```


  * #### Error:

    __Code:__ 401 - UNAUTHORIZED <br />
    __Description:__ El nombre de usuario o la contraseña son inscorrectos <br />
    __content:__

    ```json
    {
      "error": "",
      "message": ""
    }
    ```

----

## 2. Refresh Token



### PATH

  * #### URL:

  ```javascript
  `/oauth/token`
  ```

  * #### Method: `POST`


### REQUEST

  <!--  -->

  * #### Content:

  ```json
    {
      "client_id" : "1",
      "client_secret" : "k8cdDKNruUd0IXbuOUgdoFhCpG",
      "grant_type" : "refresh_token",
      "scope" : "",
      "refresh_token" : "[..]f79F5rIzqY71LOUistbV1+[..]",
    }
  ```

### RESPONSE

  * #### Success:

    <!--  -->

    __Code:__ 200 OK <br />
    __Content:__

    ```json
    {
      "token_type": "Bearer",
      "expires_in": 31536000,
      "access_token": "[..]eyJ0eXAiOiJY[..]",
      "refresh_token": "[..]BReCl8nXbicyet3Mkqf4gLu9N3[..]"
    }
    ```

----

## 3. Requests Token

### HEADERS
  * #### Content:

  ```json
    {
      "headers": {
        "Accept": "application/json",
        "Authorization": "Bearer" + "${accessToken}",
        "Content-Type": "application/json"
      }
    }
  ```
