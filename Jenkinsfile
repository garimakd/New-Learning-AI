pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:${env.PATH}"
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
                script {
                    docker.image('node:22-bookworm-slim').inside {
                        dir('New-Learning-AI') {
                            sh 'npm ci'
                        }
                    }
                }
            }
        }

        stage('Type Check') {
            steps {
                script {
                    docker.image('node:22-bookworm-slim').inside {
                        dir('New-Learning-AI') {
                            sh 'npm run typecheck'
                        }
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.image('node:22-bookworm-slim').inside {
                        dir('New-Learning-AI') {
                            sh 'npm run build'
                        }
                    }
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