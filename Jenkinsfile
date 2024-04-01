pipeline {
    agent any

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
                    def SERVER_TYPE = env.SERVER_ENV
                    sh "pm2 delete process.$SERVER_TYPE.json || true"
                    sh "npm install && pm2 start $process.$SERVER_TYPE.json"
                }
                }
            }
        }
    }
}
