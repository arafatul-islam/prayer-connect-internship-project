
# Prayer-connect Internship Project
I made this project to get an Internship opportunity form Prayer connect.





## API Reference

#### Get all items

```http
  GET http://localhost:5000/api/todo/all/todos
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get / Update / Delete item

```http
  GET/PUT/DELETE http://localhost:5000/api/todo/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Create  item

```http
  POST http://localhost:5000/api/todo/new
```






## Author

- [@arafatul-islam](https://www.github.com/arafatul-islam)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`URI` : MONGODB URI

`PORT` : specify port 

