pipeline {
    agent any

    stages {
        stage('Git Pull') {
            steps {
                deleteDir()

                dir('movies') {
                    // Checkout code from Git repository
                    git branch: 'main', url: 'https://github.com/manjunath00/movies.git'
                }
            }
        } 
    }
}
