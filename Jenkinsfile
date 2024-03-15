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
                dir('/home/pradmin/repo/micro_services/node_services/movies/') {
                sh 'npm install && node ./bin/www &'
                }
            }
        }
    }
}
