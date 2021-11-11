Instructions to Run the Docker Application

1. Extract the folder
2. Navigate to the folder 

    # cd <foldername> 

3. Install the dependencies for the back-end:

    #  cd server
    #  npm install

4. Install the dependencies for the front-end:
    
    #  cd client
    #  npm install 

5. Build server-api using Docker:

    # cd server
    # docker build -t docker-assignment-server .

6. Build front-end using Docker:

    # cd client
    # docker build -t docker-assignment-client .

7. To start the container, navigate to the folder where the docker-compose.yml file is located(root). then run. 
    
    # docker-compose up

If you want to scale the certain service:

1. First, in frontend service change ports number to -"3000" from -"3000:3000" in docker-compose.yml file.
2. Navigate to the root folder. ( cd .. )
3. Run:
    # docker-compose up --scale frontend-client=<number of instances> 

    // dont add space between "="

4. To check the running instances. run :

    # docker-compose ps

