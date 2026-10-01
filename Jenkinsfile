pipeline {
    agent {
        docker {
            image 'node:22-bookworm-slim'
        }
    }

    options {
        skipDefaultCheckout(true)
        timestamps()
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('New-Learning-AI') {
                    sh 'npm ci'
                }
            }
        }

        stage('Type Check') {
            steps {
                dir('New-Learning-AI') {
                    sh 'npm run typecheck'
                }
            }
        }

        stage('Build') {
            steps {
                dir('New-Learning-AI') {
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'New-Learning-AI/dist/**', fingerprint: true
        }
        always {
            deleteDir()
        }
    }
}