### AWS Trainig

* Setup
    - https://aws.amazon.com/getting-started/hands-on/launch-a-virtual-machine/


**Connect from Mac OS Terminal**
1. Open a terminal window and update the permissions of the private key file with the command 
    `chmod 400 <path-to-key-file>` 
    `e.g. chmod 400 /Downloads/KeyName.pem` the key must not be publicly viewable for SSH to work.

2. Copy the **Public IPv4 DNS** property from the instance description tab in the AWS Console, then connect to the instance from the terminal window with the command 
    `ssh -i <path-to-key-file> <Public_IPv4_DNS>`
    `e.g. ssh -i  /Downloads/KeyName.pem ec2-user@ec2-X-X-X-X.compute.amazonaws.com`

3. Type **yes** to the prompt "Are you sure you want to continue connecting (yes/no)?" to add the url to your list of known hosts.


* Install NODEJS EC2
    - https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-up-node-on-ec2-instance.html

* Deploying Node.js applications to Elastic Beanstalk
    - https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html

- https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorials-github-deploy-application.html


#### Reference Links
- https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc
- https://www.aws.training/Details/Video?id=16382
- https://aws.amazon.com/blogs/database/ramping-up-on-amazon-documentdb-with-mongodb-compatibility/

````
https://lex.infosysapps.com/en/app/toc/lex_auth_012762274286903296969/contents
https://lex.infosysapps.com/en/app/toc/lex_auth_012653363658407936389/overview
https://lex.infosysapps.com/en/viewer/web-module/lex_10709663580372450000?collectionId=lex_19685426003365850000&collectionType=Course
https://lex.infosysapps.com/en/viewer/video/lex_auth_013099900626444288459?collectionId=lex_auth_012638522204233728363&collectionType=Course
https://lex.infosysapps.com/en/viewer/video/lex_auth_013098571305246720225?collectionId=lex_auth_012638472045789184157&collectionType=Course
````