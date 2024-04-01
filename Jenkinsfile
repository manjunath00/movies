pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    stages {
        stage('Git Pull') {
            steps {
                dir('/home/pradmin/repo/micro_services/node_services/movies') {
                    deleteDir()

                    // Checkout code from Git repository
                    git branch: 'main', url: 'https://github.com/manjunath00/movies.git'
                }
            }
        }

        stage('NPM Install') {
            steps {
                script {

                dir('/home/pradmin/repo/micro_services/node_services/movies/') {
                    def SERVER_TYPE = "process.${env.SERVER_ENV}.json"
                    echo "The server type is $SERVER_TYPE"
                    sh "pm2 delete $SERVER_TYPE || true"
                    sh "npm install && pm2 start $SERVER_TYPE"
                }
                }
            }
        }
    }
}
