#!groovy

node('!master && amazon-linux-64bit-generic') {
    checkout scm

    stage name: 'Build slate image'
    sh "docker build -t dev-apac.bambora.com ."

    stage name: 'Build static web content'
    sh "docker run -v \"\$PWD\"/build:/usr/src/app/build dev-apac.bambora.com static"

    if (env.BRANCH_NAME == "master") {
        stage name: 'Publish to S3'
        sh "aws --region eu-west-1 s3 sync --acl=public-read \"\$PWD\"/build/ s3://dev-apac.bambora.com/"
    } else if (env.BRANCH_NAME == "develop"){
        stage name: 'Publish to S3'
        sh "aws --region eu-west-1 s3 sync --acl=public-read \"\$PWD\"/build/ s3://bambora-dev-apac-portal-test-eu-west-1/"
    }
}
