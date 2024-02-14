import cpp from '../../assets/cpp.png';
import java from '../../assets/java.png';
import python from '../../assets/python.png';
import go from '../../assets/go.svg';
import js from '../../assets/javascript.png';
import ts from '../../assets/typescript.svg';
import sql from '../../assets/sql.webp';


import cb from '../../assets/cb.png';
import es from '../../assets/elasticsearch.png';
import pgsql from '../../assets/postgres.png';
import dynamo from '../../assets/dynamo.png';
import mysql from '../../assets/mysql.png';
import redis from '../../assets/redis.png';
import mongo from '../../assets/mongo.png';

import react from '../../assets/react.svg';
import relay from '../../assets/relay.png';
import redux from '../../assets/redux.png';
import nodejs from '../../assets/nodejs.png';
import flask from '../../assets/flask.png';
import django from '../../assets/django.png';
import d3 from '../../assets/d3.png';

import git from '../../assets/git.png';
import docker from '../../assets/docker.webp';
import azure from '../../assets/azure.png';
import aws from '../../assets/aws.jpeg';
import graphql from '../../assets/graphql.png';
import grpc from '../../assets/grpc.png';
import kuber from '../../assets/kuber.png';
import kafka from '../../assets/kafka.png';


const SKILL_TYPE = {
    LANGUAGE: 'LANGUAGE',
    DATABASES: 'DATABASES',
    LIBRARIES: 'LIBRARIES',
    MISC: 'MISC',
};

const LANG_CONFIG = [{
    name: 'C++',
    logo: cpp,
}, {
    name: 'Java',
    logo: java,
}, {
    name: 'Python',
    logo: python,
}, {
    name: 'Go',
    logo: go,
}, {
    name: 'Javascript',
    logo: js,
}, {
    name: 'Typescript',
    logo: ts,
}, {
    name: 'SQL',
    logo: sql,
}];

const DB_CONFIG = [{
    name: 'Couchbase',
    logo: cb,
}, {
    name: 'ElasticSearch',
    logo: es,
}, {
    name: 'PostgreSQL',
    logo: pgsql,
}, {
    name: 'MySQL',
    logo: mysql,
}, {
    name: 'AWS DynamoDB',
    logo: dynamo,
}, {
    name: 'Redis',
    logo: redis,
}, {
    name: 'MongoDB',
    logo: mongo,
}];

const LIB_CONFIG = [{
    name: 'React',
    logo: react,
}, {
    name: 'Relay',
    logo: relay,
}, {
    name: 'Redux',
    logo: redux,
}, {
    name: 'Node.js',
    logo: nodejs,
}, {
    name: 'Flask (Python)',
    logo: flask,
}, {
    name: 'Django (Python)',
    logo: django,
}, {
    name: 'd3.js',
    logo: d3,
}];

const MISC_CONFIG = [{
    name: 'Git',
    logo: git,
}, {
    name: 'Docker',
    logo: docker,
}, {
    name: 'AWS',
    logo: aws,
}, {
    name: 'Azure',
    logo: azure,
}, {
    name: 'GraphQL',
    logo: graphql,
}, {
    name: 'gRPC',
    logo: grpc,
}, {
    name: 'Kubernetes',
    logo: kuber,
}, {
    name: 'Kafka',
    logo: kafka,
}];

export const SKILLS_CONFIG = {
    [SKILL_TYPE.LANGUAGE]: {
        title: 'Languages',
        stacks: LANG_CONFIG,
    },
    [SKILL_TYPE.DATABASES]: {
        title: 'Databases',
        stacks: DB_CONFIG,
    },
    [SKILL_TYPE.LIBRARIES]: {
        title: 'Libraries',
        stacks: LIB_CONFIG,
    },
    [SKILL_TYPE.MISC]: {
        title: 'Miscellaneous',
        stacks: MISC_CONFIG,
    }
}