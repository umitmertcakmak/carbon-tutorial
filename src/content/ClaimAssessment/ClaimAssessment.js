import React, { Component, Fragment, useState } from 'react';

import {
  DatePicker,
  DatePickerInput,
  TextArea,
  TextInput,
  Button,
} from 'carbon-components-react';

import Select from 'react-select';

import { Tile } from 'carbon-components-react';

import {
  HBarChartComponent,
  ScatterPlotComponent,
} from '../../components/ChartComponents';

import customerImages from './images';

import * as d3 from 'd3';

// const items =['Other', 'Luggage', 'Clothing', 'Cameras', 'Jewelry', 'Locks', 'Computer', 'Cosmetics', 'Eyeglasses', 'Bluetooth', 'Cell', 'Travel', 'MP3', 'Baggage/Cases/Purses', 'Watches', 'Computer/Accessories', 'DVD/CD', 'Sporting', 'Personal', 'Handbags', 'GPS', 'Toys', 'Alcoholic', 'Bags', 'Stereo', 'Baby', 'Musical', 'Books', 'Tools', 'Glassware', 'Pottery', 'Plasticware', 'Dishes', 'PDA', 'Musical/Instruments', 'Pictures', 'Bicycle/Equipment', 'Video', 'Game/Equipment', 'Knives', 'Pans', 'Kitchen', 'Home', 'Cell/Accessories', 'Paintings', 'Audio', 'Dental', 'Household', 'Photos/Accessories', 'Batteries', 'Camping'];

const clientData = [
  {
    PolicyNumber: '1',
    Name: 'Lucy Smith',
    ServiceAddress: '490 Big Blue Street',
    PrimaryPhone: '1430655',
    SecondaryPhone: '5240119',
    Email: 'Lucy.Smith@blueco.com',
    CustomerSince: '2014',
    Age: '29',
    AgeGroup: '18-29',
    CustomerRegion: 'AZ',
    CustomerImage: './assets/customer_avatars/Female1.png',
    CustomerOutcome: {
      predictions: [
        {
          results: {
            claim_outcome: 'Reject',
            claim_outcome_probabilities: [0.594486340171565, 0.405513659828435],
            debiased_outcome_probabilities: [
              0.594486340171565,
              0.405513659828435,
            ],
            debiased_outcome: 'Reject',
            claim_amount: null,
            factors: [
              {
                value: 'Reject',
                explanation_features: [
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Game/Equipment',
                    weight: 0.17805663731967641,
                  },
                  {
                    feature_name: 'age_group',
                    weight: 0.1282450941686977,
                    feature_value: '18-29',
                  },
                  {
                    feature_range: { max: '59.43', max_inclusive: true },
                    feature_name: 'item_amount',
                    weight: -0.11161116462953145,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Knives',
                    weight: 0.1028248070999935,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Camping',
                    weight: -0.09525997779444355,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Dental',
                    weight: 0.08702283133941942,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Household',
                    weight: 0.08563701684782721,
                  },
                  {
                    feature_name: 'incident_date',
                    weight: 0.07961708811284121,
                    feature_value: '2006-05-01',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pans',
                    weight: -0.07931220241346586,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pictures',
                    weight: 0.052413180274103646,
                  },
                ],
                probability: 0.594486340171565,
              },
              { value: 'Settle', probability: 0.405513659828435 },
            ],
          },
        },
      ],
    },
  },
  {
    PolicyNumber: '2',
    Name: 'Elizabeth Woods',
    ServiceAddress: '297 Blue Co Lane',
    PrimaryPhone: '1205281',
    SecondaryPhone: '5954441',
    Email: 'Elizabeth.Woods@blueco.com',
    CustomerSince: '2005',
    Age: '35',
    AgeGroup: '30-49',
    CustomerRegion: 'FL',
    CustomerImage: './assets/customer_avatars/Female2.png',
    CustomerOutcome: {
      predictions: [
        {
          results: {
            claim_outcome: 'Reject',
            claim_outcome_probabilities: [
              0.6133331654934557,
              0.3866668345065442,
            ],
            debiased_outcome_probabilities: [
              0.6133331654934557,
              0.3866668345065442,
            ],
            debiased_outcome: 'Reject',
            claim_amount: null,
            factors: [
              {
                value: 'Reject',
                explanation_features: [
                  {
                    feature_name: 'age_group',
                    weight: -0.18600806731975097,
                    feature_value: '30-49',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Game/Equipment',
                    weight: 0.15732164742715302,
                  },
                  {
                    feature_name: 'date_received',
                    weight: 0.10855143348744539,
                    feature_value: '2009-04-22 00:00:00',
                  },
                  {
                    feature_range: { max: '59.43', max_inclusive: true },
                    feature_name: 'item_amount',
                    weight: -0.10684047768971208,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Dental',
                    weight: 0.10393987361745502,
                  },
                  {
                    feature_range: { min: '0.00', min_inclusive: false },
                    feature_name: 'Knives',
                    weight: -0.07807396359646648,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Audio',
                    weight: -0.07519739474178333,
                  },
                  {
                    feature_name: 'incident_date',
                    weight: 0.07414039215537271,
                    feature_value: '2009-03-06 00:00:00',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Household',
                    weight: 0.05672101686038452,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pictures',
                    weight: 0.0532057331044764,
                  },
                ],
                probability: 0.6133331654934557,
              },
              { value: 'Settle', probability: 0.38666683450654427 },
            ],
          },
        },
      ],
    },
  },
  {
    PolicyNumber: '3',
    Name: 'Jane Doe',
    ServiceAddress: '769 DSE Drive',
    PrimaryPhone: '1805379',
    SecondaryPhone: '5998353',
    Email: 'Jane.Doe@blueco.com',
    CustomerSince: '1984',
    Age: '79',
    AgeGroup: '50+',
    CustomerRegion: 'KY',
    CustomerImage: './assets/customer_avatars/Female3.png',
    CustomerOutcome: {
      predictions: [
        {
          results: {
            claim_outcome: 'Reject',
            claim_outcome_probabilities: [
              0.5356073365123198,
              0.46439266348768016,
            ],
            debiased_outcome_probabilities: [
              0.5356073365123198,
              0.46439266348768016,
            ],
            debiased_outcome: 'Reject',
            claim_amount: null,
            factors: [
              {
                value: 'Reject',
                explanation_features: [
                  {
                    feature_name: 'age_group',
                    weight: 0.15981633733256553,
                    feature_value: '50+',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Knives',
                    weight: 0.11661124723871259,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Game/Equipment',
                    weight: 0.11087377538543304,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pans',
                    weight: -0.10897255147210291,
                  },
                  {
                    feature_name: 'incident_date',
                    weight: -0.10619100618092003,
                    feature_value: '2004-01-24',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Household',
                    weight: 0.08823593449156665,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pictures',
                    weight: 0.08715022815728772,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Kitchen',
                    weight: 0.08593498051490464,
                  },
                  {
                    feature_name: 'date_received',
                    weight: -0.07039612613094624,
                    feature_value: '2004-03-10',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Audio',
                    weight: -0.06581781309556067,
                  },
                ],
                probability: 0.5356073365123198,
              },
              { value: 'Settle', probability: 0.46439266348768016 },
            ],
          },
        },
      ],
    },
  },
  {
    PolicyNumber: '4',
    Name: 'Nancy Diaz',
    ServiceAddress: '487 Watson Lane',
    PrimaryPhone: '1532497',
    SecondaryPhone: '5019006',
    Email: 'Nancy Diaz@blueco.com',
    CustomerSince: '1998',
    Age: '48',
    AgeGroup: '30-49',
    CustomerRegion: 'MA',
    CustomerImage: './assets/customer_avatars/Female4.png',
    CustomerOutcome: {
      predictions: [
        {
          results: {
            claim_outcome: 'Reject',
            claim_outcome_probabilities: [
              0.9241175932035519,
              0.07588240679644806,
            ],
            debiased_outcome_probabilities: [
              0.9241175932035519,
              0.07588240679644806,
            ],
            debiased_outcome: 'Reject',
            claim_amount: null,
            factors: [
              {
                value: 'Reject',
                explanation_features: [
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Game/Equipment',
                    weight: 0.18355689119409474,
                  },
                  {
                    feature_name: 'age_group',
                    weight: -0.18014708137243252,
                    feature_value: '30-49',
                  },
                  {
                    feature_range: { min: '419.98', min_inclusive: false },
                    feature_name: 'item_amount',
                    weight: 0.15976631879685918,
                  },
                  {
                    feature_name: 'date_received',
                    weight: 0.10885439236289346,
                    feature_value: '2008-12-16',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Dental',
                    weight: 0.09108539935964656,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pictures',
                    weight: 0.07478527759140391,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Knives',
                    weight: 0.06983089412837318,
                  },
                  {
                    feature_name: 'incident_date',
                    weight: 0.05447466254925074,
                    feature_value: '2008-12-05',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Paintings',
                    weight: 0.05299570635900039,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Household',
                    weight: 0.024503376286045427,
                  },
                ],
                probability: 0.9241175932035519,
              },
              { value: 'Settle', probability: 0.07588240679644809 },
            ],
          },
        },
      ],
    },
  },
  {
    PolicyNumber: '5',
    Name: 'Carol Liu',
    ServiceAddress: '767 Watson Street',
    PrimaryPhone: '1701528',
    SecondaryPhone: '5935619',
    Email: 'Carol Liu@blueco.com',
    CustomerSince: '2018',
    Age: '22',
    AgeGroup: '18-29',
    CustomerRegion: 'PA',
    CustomerImage: './assets/customer_avatars/Female5.png',
    CustomerOutcome: {
      predictions: [
        {
          results: {
            claim_outcome: 'Reject',
            claim_outcome_probabilities: [
              0.864298861550858,
              0.13570113844914203,
            ],
            debiased_outcome_probabilities: [
              0.864298861550858,
              0.13570113844914203,
            ],
            debiased_outcome: 'Reject',
            claim_amount: null,
            factors: [
              {
                value: 'Reject',
                explanation_features: [
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Game/Equipment',
                    weight: 0.2059562298454839,
                  },
                  {
                    feature_range: { min: '419.98', min_inclusive: false },
                    feature_name: 'item_amount',
                    weight: 0.16689034278518194,
                  },
                  {
                    feature_name: 'age_group',
                    weight: 0.12826993999868325,
                    feature_value: '18-29',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Knives',
                    weight: 0.08635756807091405,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Dental',
                    weight: 0.07855493787153632,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pictures',
                    weight: 0.07420767046776795,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Paintings',
                    weight: 0.07333791852831759,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pans',
                    weight: -0.07031026246195647,
                  },
                  {
                    feature_name: 'incident_date',
                    weight: 0.06259947155711545,
                    feature_value: '2007-07-22 00:00:00',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Household',
                    weight: 0.05351565841304303,
                  },
                ],
                probability: 0.864298861550858,
              },
              { value: 'Settle', probability: 0.135701138449142 },
            ],
          },
        },
      ],
    },
  },
  {
    PolicyNumber: '6',
    Name: 'John Doe',
    ServiceAddress: '648 IBM Place',
    PrimaryPhone: '1783086',
    SecondaryPhone: '5444043',
    Email: 'John.Doe@blueco.com',
    CustomerSince: '2009',
    Age: '30',
    AgeGroup: '30-49',
    CustomerRegion: 'OH',
    CustomerImage: './assets/customer_avatars/Male1.png',
    CustomerOutcome: {
      predictions: [
        {
          results: {
            claim_outcome: 'Settle',
            claim_outcome_probabilities: [
              0.00035871509846086,
              0.9996412849015391,
            ],
            debiased_outcome_probabilities: [
              0.00035871509846086,
              0.9996412849015391,
            ],
            debiased_outcome: 'Settle',
            claim_amount: 493.62274169921875,
            factors: [
              {
                value: 'Settle',
                explanation_features: [
                  {
                    feature_name: 'date_received',
                    weight: 0.20047265936743344,
                    feature_value: '2013-01-17 00:00:00',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Game/Equipment',
                    weight: -0.16535636150880634,
                  },
                  {
                    feature_name: 'age_group',
                    weight: 0.16234242265721344,
                    feature_value: '30-49',
                  },
                  {
                    feature_range: { min: '419.98', min_inclusive: false },
                    feature_name: 'item_amount',
                    weight: -0.1436344730731843,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Dental',
                    weight: -0.08251921078881991,
                  },
                  {
                    feature_range: { min: '0.00', min_inclusive: false },
                    feature_name: 'Pictures',
                    weight: 0.07537654711756941,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Knives',
                    weight: -0.06276983992850102,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Paintings',
                    weight: -0.047664363111841385,
                  },
                  {
                    feature_name: 'incident_date',
                    weight: 0.03771617238995943,
                    feature_value: '2012-11-11 00:00:00',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Household',
                    weight: -0.022147950056671365,
                  },
                ],
                probability: 0.9996412849015391,
              },
              { value: 'Reject', probability: 0.00035871509846086 },
            ],
          },
        },
      ],
    },
  },
  {
    PolicyNumber: '7',
    Name: 'James Smith',
    ServiceAddress: '365 Watson Place',
    PrimaryPhone: '1281815',
    SecondaryPhone: '5644506',
    Email: 'James.Smith@blueco.com',
    CustomerSince: '1997',
    Age: '56',
    AgeGroup: '50+',
    CustomerRegion: 'CA',
    CustomerImage: './assets/customer_avatars/Male2.png',
    CustomerOutcome: {
      predictions: [
        {
          results: {
            claim_outcome: 'Settle',
            claim_outcome_probabilities: [
              0.4669647068347905,
              0.5330352931652095,
            ],
            debiased_outcome_probabilities: [
              0.4669647068347905,
              0.5330352931652095,
            ],
            debiased_outcome: 'Settle',
            claim_amount: 189.00381469726562,
            factors: [
              {
                value: 'Settle',
                explanation_features: [
                  {
                    feature_name: 'incident_date',
                    weight: 0.1714195505162741,
                    feature_value: '2004-01-02',
                  },
                  {
                    feature_name: 'age_group',
                    weight: -0.1508948112827252,
                    feature_value: '50+',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Game/Equipment',
                    weight: -0.10943430245606142,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pans',
                    weight: 0.10261194472849669,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Knives',
                    weight: -0.09467456036104915,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Household',
                    weight: -0.08258147818706213,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pictures',
                    weight: -0.08170130651996257,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Kitchen',
                    weight: -0.07986943568939017,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Photos/Accessories',
                    weight: 0.06444847286664795,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Audio',
                    weight: 0.062364137392330675,
                  },
                ],
                probability: 0.5330352931652095,
              },
              { value: 'Reject', probability: 0.4669647068347905 },
            ],
          },
        },
      ],
    },
  },
  {
    PolicyNumber: '8',
    Name: 'Richard Woods',
    ServiceAddress: '632 IBM Road',
    PrimaryPhone: '1209093',
    SecondaryPhone: '5174172',
    Email: 'Richard.Woods@blueco.com',
    CustomerSince: '2016',
    Age: '23',
    AgeGroup: '18-29',
    CustomerRegion: 'NY',
    CustomerImage: './assets/customer_avatars/Male3.png',
    CustomerOutcome: {
      predictions: [
        {
          results: {
            claim_outcome: 'Settle',
            claim_outcome_probabilities: [
              0.42301363247958845,
              0.5769863675204115,
            ],
            debiased_outcome_probabilities: [
              0.42301363247958845,
              0.5769863675204115,
            ],
            debiased_outcome: 'Settle',
            claim_amount: 63.439781188964844,
            factors: [
              {
                value: 'Settle',
                explanation_features: [
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Game/Equipment',
                    weight: -0.1794058593066003,
                  },
                  {
                    feature_name: 'age_group',
                    weight: -0.1499934981283827,
                    feature_value: '18-29',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Knives',
                    weight: -0.12681548335826984,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pans',
                    weight: 0.09913276577736613,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pictures',
                    weight: -0.08304383429681114,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'GPS',
                    weight: 0.08222221722732538,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Camping',
                    weight: 0.08041103318993802,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Dental',
                    weight: -0.07012549167163887,
                  },
                  {
                    feature_range: {
                      max: '158.44',
                      min: '59.43',
                      min_inclusive: false,
                      max_inclusive: true,
                    },
                    feature_name: 'item_amount',
                    weight: 0.06819724390267413,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Household',
                    weight: -0.06065257314099359,
                  },
                ],
                probability: 0.5769863675204115,
              },
              { value: 'Reject', probability: 0.42301363247958845 },
            ],
          },
        },
      ],
    },
  },
  {
    PolicyNumber: '9',
    Name: 'Michael Diaz',
    ServiceAddress: '763 Big Blue Avenue',
    PrimaryPhone: '1502369',
    SecondaryPhone: '5360440',
    Email: 'Michael.Diaz@blueco.com',
    CustomerSince: '1988',
    Age: '68',
    AgeGroup: '50+',
    CustomerRegion: 'TX',
    CustomerImage: './assets/customer_avatars/Male4.png',
    CustomerOutcome: {
      predictions: [
        {
          results: {
            claim_outcome: 'Reject',
            claim_outcome_probabilities: [
              0.9421035357801679,
              0.05789646421983213,
            ],
            debiased_outcome_probabilities: [
              0.9421035357801679,
              0.05789646421983213,
            ],
            debiased_outcome: 'Reject',
            claim_amount: null,
            factors: [
              {
                value: 'Reject',
                explanation_features: [
                  {
                    feature_range: { min: '419.98', min_inclusive: false },
                    feature_name: 'item_amount',
                    weight: 0.17234277786809094,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Game/Equipment',
                    weight: 0.14986670426041343,
                  },
                  {
                    feature_name: 'age_group',
                    weight: 0.1325526409178437,
                    feature_value: '50+',
                  },
                  {
                    feature_name: 'date_received',
                    weight: 0.11674445948951266,
                    feature_value: '2007-10-09',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Knives',
                    weight: 0.09132402831858014,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pans',
                    weight: -0.07630535642462077,
                  },
                  {
                    feature_range: { min: '0.00', min_inclusive: false },
                    feature_name: 'Pictures',
                    weight: -0.07396039307346877,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Kitchen',
                    weight: 0.0678125403244339,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Paintings',
                    weight: 0.06221496074828348,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Household',
                    weight: 0.05687613857475214,
                  },
                ],
                probability: 0.9421035357801679,
              },
              { value: 'Settle', probability: 0.05789646421983208 },
            ],
          },
        },
      ],
    },
  },
  {
    PolicyNumber: '10',
    Name: 'William Liu',
    ServiceAddress: '491 Watson Drive',
    PrimaryPhone: '1010802',
    SecondaryPhone: '5356234',
    Email: 'William.Liu@blueco.com',
    CustomerSince: '2019',
    Age: '23',
    AgeGroup: '18-29',
    CustomerRegion: 'IL',
    CustomerImage: './assets/customer_avatars/Male5.png',
    CustomerOutcome: {
      predictions: [
        {
          results: {
            claim_outcome: 'Reject',
            claim_outcome_probabilities: [
              0.8472090446265728,
              0.15279095537342718,
            ],
            debiased_outcome_probabilities: [
              0.8472090446265728,
              0.15279095537342718,
            ],
            debiased_outcome: 'Reject',
            claim_amount: null,
            factors: [
              {
                value: 'Reject',
                explanation_features: [
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Game/Equipment',
                    weight: 0.16829791755095205,
                  },
                  {
                    feature_name: 'age_group',
                    weight: 0.13983139701428915,
                    feature_value: '18-29',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Knives',
                    weight: 0.10500277911682351,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pans',
                    weight: -0.09795666301525485,
                  },
                  {
                    feature_name: 'incident_date',
                    weight: 0.09444215623453477,
                    feature_value: '2005-08-28',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Camping',
                    weight: -0.08404570891421292,
                  },
                  {
                    feature_name: 'date_received',
                    weight: 0.07975927813599218,
                    feature_value: '2005-09-26',
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Household',
                    weight: 0.079184565883939,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Pictures',
                    weight: 0.07894441170378635,
                  },
                  {
                    feature_range: { max: '0.00', max_inclusive: true },
                    feature_name: 'Dental',
                    weight: 0.07253512243021513,
                  },
                ],
                probability: 0.8472090446265728,
              },
              { value: 'Settle', probability: 0.15279095537342724 },
            ],
          },
        },
      ],
    },
  },
];

const options = [
  { value: 'Other', label: 'Other' },
  { value: 'Luggage', label: 'Luggage' },
  { value: 'Clothing', label: 'Clothing' },
  { value: 'Cameras', label: 'Cameras' },
  { value: 'Jewelry', label: 'Jewelry' },
  { value: 'Locks', label: 'Locks' },
  { value: 'Computer', label: 'Computer' },
  { value: 'Cosmetics', label: 'Cosmetics' },
  { value: 'Eyeglasses', label: 'Eyeglasses' },
  { value: 'Bluetooth', label: 'Bluetooth' },
  { value: 'Cell', label: 'Cell' },
  { value: 'Travel', label: 'Travel' },
  { value: 'MP3', label: 'MP3' },
  { value: 'Baggage/Cases/Purses', label: 'Baggage/Cases/Purses' },
  { value: 'Watches', label: 'Watches' },
  { value: 'Computer/Accessories', label: 'Computer/Accessories' },
  { value: 'DVD/CD', label: 'DVD/CD' },
  { value: 'Sporting', label: 'Sporting' },
  { value: 'Personal', label: 'Personal' },
  { value: 'Handbags', label: 'Handbags' },
  { value: 'GPS', label: 'GPS' },
  { value: 'Toys', label: 'Toys' },
  { value: 'Alcoholic', label: 'Alcoholic' },
  { value: 'Bags', label: 'Bags' },
  { value: 'Stereo', label: 'Stereo' },
  { value: 'Baby', label: 'Baby' },
  { value: 'Musical', label: 'Musical' },
  { value: 'Books', label: 'Books' },
  { value: 'Tools', label: 'Tools' },
  { value: 'Glassware', label: 'Glassware' },
  { value: 'Pottery', label: 'Pottery' },
  { value: 'Plasticware', label: 'Plasticware' },
  { value: 'Dishes', label: 'Dishes' },
  { value: 'PDA', label: 'PDA' },
  { value: 'Musical/Instruments', label: 'Musical/Instruments' },
  { value: 'Pictures', label: 'Pictures' },
  { value: 'Bicycle/Equipment', label: 'Bicycle/Equipment' },
  { value: 'Video', label: 'Video' },
  { value: 'Game/Equipment', label: 'Game/Equipment' },
  { value: 'Knives', label: 'Knives' },
  { value: 'Pans', label: 'Pans' },
  { value: 'Kitchen', label: 'Kitchen' },
  { value: 'Home', label: 'Home' },
  { value: 'Cell/Accessories', label: 'Cell/Accessories' },
  { value: 'Paintings', label: 'Paintings' },
  { value: 'Audio', label: 'Audio' },
  { value: 'Dental', label: 'Dental' },
  { value: 'Household', label: 'Household' },
  { value: 'Photos/Accessories', label: 'Photos/Accessories' },
  { value: 'Batteries', label: 'Batteries' },
  { value: 'Camping', label: 'Camping' },
];

class PlaceHolder extends React.Component {
  render() {
    return <div />;
  }
}

class CustomerInfo extends React.Component {
  render() {
    const isSubmitted = this.props.isSubmitted;
    const customerName = this.props.name;

    if (isSubmitted) {
      return (
        <div>
          <Tile>
            <h2 className="landing-page__subheading">Customer Information</h2>

            <div className="bx--row claim-assessment__form-element">
              <div className="bx--col-lg-5">
                <br />
                <img
                  src={customerImages[customerName]}
                  width={150}
                  alt="employee avatar"
                />
              </div>

              <div className="bx--col-lg">
                <br />
                <p className="bx--label claim-assessment__text_padding">
                  Name:{' '}
                </p>{' '}
                {this.props.name}
                <br />
                <p className="bx--label claim-assessment__text_padding">
                  Service Address:{' '}
                </p>{' '}
                {this.props.serviceAddress}
                <br />
                <p className="bx--label claim-assessment__text_padding">
                  Primary Phone:{' '}
                </p>{' '}
                {this.props.primaryPhone}
                <br />
                <p className="bx--label claim-assessment__text_padding">
                  Secondary Phone:{' '}
                </p>{' '}
                {this.props.secondaryPhone}
                <br />
                <p className="bx--label claim-assessment__text_padding">
                  Email:{' '}
                </p>{' '}
                {this.props.email}
                <br />
                <p className="bx--label claim-assessment__text_padding">
                  Customer since:{' '}
                </p>{' '}
                {this.props.customerSince}
                <br />
                <p className="bx--label claim-assessment__text_padding">
                  Age:{' '}
                </p>{' '}
                {this.props.age}
              </div>
            </div>
          </Tile>
        </div>
      );
    }
    return <PlaceHolder />;
  }
}

class PredictedOutcome extends React.Component {
  round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  render() {
    const isSubmitted = this.props.isSubmitted;

    if (isSubmitted) {
      return (
        <div>
          <Tile>
            <h2 className="landing-page__subheading">Likely Outcome</h2>
            <br />
            {/*<p>{this.props.likelyOutcome} </p>*/}
            {/*<p>Rejected: {this.props.debiasedOutcomeProbabilities[0]}</p>*/}
            {/*<p>Settled: {this.props.debiasedOutcomeProbabilities[1]}</p>*/}
            <ScatterPlotComponent
              predictionOutcome={this.props.predictionOutcome}
              predictionProbability={this.props.predictionProbability}
            />
          </Tile>
        </div>
      );
    }
    return (
      <Fragment>
        <PlaceHolder />
      </Fragment>
    );
  }
}

class Factors extends React.Component {
  render() {
    const isSubmitted = this.props.isSubmitted;
    if (isSubmitted) {
      return (
        <div>
          <Tile>
            <h2 className="landing-page__subheading">Factors</h2>
            <br />
            <br />
            <HBarChartComponent
              data={this.props.data}
              title={this.props.title}
            />
          </Tile>
        </div>
      );
    }
    return (
      <Fragment>
        <PlaceHolder />
      </Fragment>
    );
  }
}

class OpenScale extends React.Component {
  render() {
    const isSubmitted = this.props.isSubmitted;
    if (isSubmitted) {
      return (
        <div>
          <Tile>
            <h2 className="landing-page__subheading">Compare to Bias Output</h2>
            <br />

            <img src={require('./assets/WatsonCert.png')} height={150} />

            <br />
            <br />
            <p>{this.props.bias}</p>
          </Tile>
        </div>
      );
    }
    return <PlaceHolder />;
  }
}

class ClaimAssessment extends Component {
  constructor() {
    super();
    this.state = {
      policyNumber: '',
      pickedDate: '',
      claimedItems: '',
      claimType: '',
      estimatedValue: '',
      incidentDetails: '',
      selectedOption: null,
      isSubmitted: false,

      customerName: '',
      customerServiceAddress: '',
      customerPrimaryPhone: '',
      customerSecondaryPhone: '',
      customerEmail: '',
      customerCustomerSince: '',
      customerAge: '',
      customerAgeGroup: '',
      customerRegion: '',
      customerImage: '',

      likelyOutcome: '',
      debiasedOutcomeProbabilities: [],
      bias: '',

      predictionOutcome: null,
      predictionProbability: null,

      negativeFactorsData: [],
      positiveFactorsData: [],
      factorsData: [],
      factorsChartTitle: 'Factors',
    };
  }

  onChange = e => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */

    this.setState({ [e.target.name]: e.target.value }, function() {
      console.log(this.state);
    });
  };

  round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  onSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const {
      policyNumber,
      pickedDate,
      claimedItems,
      claimType,
      estimatedValue,
      incidentDetails,
      selectedOption,
      likelyOutcome,
      bias,
    } = this.state;

    console.log('Policy number: ', policyNumber.toString());

    console.log('Client data: ', clientData);

    let clientPerPolicyNumber = clientData.find(
      x => x.PolicyNumber === policyNumber.toString()
    );

    let predictedOutcome = '';

    if (
      clientPerPolicyNumber.CustomerOutcome.predictions[0].results
        .claim_outcome === 'Reject'
    ) {
      predictedOutcome = 'Rejected';
    } else {
      predictedOutcome = 'Settled';
    }

    let debiasedOutcomeProbabilities =
      clientPerPolicyNumber.CustomerOutcome.predictions[0].results
        .debiased_outcome_probabilities;

    let factorsData = [];
    let negativeFactorsData = [];
    let positiveFactorsData = [];
    let factorRecord = {};

    for (let record in clientPerPolicyNumber.CustomerOutcome.predictions[0]
      .results.factors[0].explanation_features) {
      factorRecord =
        clientPerPolicyNumber.CustomerOutcome.predictions[0].results.factors[0]
          .explanation_features[record];

      console.log(factorRecord.feature_name, factorRecord.weight);

      if (factorRecord.weight < 0) {
        factorsData.push({
          Factor: factorRecord.feature_name,
          Weight: this.round(factorRecord.weight, 2),
        });
        negativeFactorsData.push({
          Factor: factorRecord.feature_name,
          Weight: Math.abs(this.round(factorRecord.weight, 2)),
        });
      } else {
        factorsData.push({
          Factor: factorRecord.feature_name,
          Weight: this.round(factorRecord.weight, 2),
        });
        positiveFactorsData.push({
          Factor: factorRecord.feature_name,
          Weight: this.round(factorRecord.weight, 2),
        });
      }
    }

    let predictionOutcome = '';
    let predictionProbability = 0.0;

    if (debiasedOutcomeProbabilities[0] > debiasedOutcomeProbabilities[1]) {
      predictionOutcome = 'Rejected';
      predictionProbability = Math.ceil(debiasedOutcomeProbabilities[0] * 100);
    } else {
      predictionOutcome = 'Settled';
      predictionProbability = Math.ceil(debiasedOutcomeProbabilities[1] * 100);
    }

    console.log(
      'prediction probs: ',
      debiasedOutcomeProbabilities[0],
      debiasedOutcomeProbabilities[1],
      predictionOutcome,
      predictionProbability
    );

    this.setState(
      {
        likelyOutcome: predictedOutcome,
        debiasedOutcomeProbabilities: debiasedOutcomeProbabilities,
        negativeFactorsData: negativeFactorsData,
        positiveFactorsData: positiveFactorsData,
        factorsData: factorsData,

        predictionOutcome: predictionOutcome,
        predictionProbability: predictionProbability,

        customerName: clientPerPolicyNumber.Name,
        customerServiceAddress: clientPerPolicyNumber.ServiceAddress,
        customerPrimaryPhone: clientPerPolicyNumber.PrimaryPhone,
        customerSecondaryPhone: clientPerPolicyNumber.SecondaryPhone,
        customerEmail: clientPerPolicyNumber.Email,
        customerCustomerSince: clientPerPolicyNumber.CustomerSince,
        customerAge: clientPerPolicyNumber.Age,
        customerAgeGroup: clientPerPolicyNumber.AgeGroup,
        customerRegion: clientPerPolicyNumber.CustomerRegion,
        customerImage: clientPerPolicyNumber.CustomerImage,
      },
      function() {
        console.log('updating customer info: ', this.state);
      }
    );

    this.setState(
      {
        isSubmitted: true,
      },
      function() {
        console.log('updating is submitted: ', this.state);
      }
    );

    // axios.post('/', { fname, lname, email })
    //   .then((result) => {
    //     //access the results here....
    //   });
    console.log('Client per policy number: ', clientPerPolicyNumber);
  };

  render() {
    const {
      policyNumber,
      lname,
      email,
      textarea,
      pickedDate,
      claimedItems,
      claimType,
      estimatedValue,
      incidentDetails,
      selectedOption,
    } = this.state;

    return (
      <div className="bx--grid bx--grid--full-width landing-page">
        <div className="bx--row claim-assessment__padding" />

        <div className="bx--row claim-assessment__form-element">
          <div className="bx--col-lg-4" />
          <div className="bx--col-lg-12">
            <h1 className="landing-page__heading">
              Insurance Claim Assessment
            </h1>
            <div className="bx--row claim-assessment__padding_2" />

            <div className="bx--row claim-assessment__form-element">
              <div className="bx--col-lg-6">
                <TextInput
                  style={{ backgroundColor: 'white' }}
                  helperText=""
                  id="policyNumber"
                  invalidText="Invalid error message."
                  labelText="Customer policy number"
                  placeholder={policyNumber}
                  name="policyNumber"
                  value={policyNumber}
                  onChange={this.onChange}
                />
              </div>

              <div className="bx--col-lg-6">
                <DatePicker
                  dateFormat="m/d/Y"
                  datePickerType="single"
                  name="pickedDate"
                  value={pickedDate}
                  onChange={date =>
                    this.setState({ pickedDate: date[0] }, function() {
                      console.log(this.state);
                    })
                  }>
                  <DatePickerInput
                    style={{ backgroundColor: 'white' }}
                    id="date-picker-calendar-id"
                    placeholder="mm/dd/yyyy"
                    labelText="Incident date"
                    type="text"
                  />
                </DatePicker>
              </div>
            </div>

            <div className="bx--row claim-assessment__padding_2" />

            <div className="bx--row claim-assessment__form-element">
              <div className="bx--col-lg-6">
                <p class="bx--label">What item was being claimed? </p>
                <Select
                  class="bx--dropdown"
                  value={selectedOption}
                  onChange={item =>
                    this.setState({ selectedOption: item }, function() {
                      console.log(this.state);
                    })
                  }
                  options={options}
                />
              </div>

              <div className="bx--col-lg-6">
                <TextInput
                  style={{ backgroundColor: 'white' }}
                  id="claimType"
                  invalidText="Invalid error message."
                  labelText="Type of claim"
                  placeholder={claimType}
                  name="claimType"
                  value={claimType}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="bx--row claim-assessment__padding_2" />

            <div className="bx--row claim-assessment__form-element">
              <div className="bx--col-lg-6">
                <TextInput
                  style={{ backgroundColor: 'white' }}
                  id="estimatedValue"
                  invalidText="Invalid error message."
                  labelText="What is the estimated value of the item?"
                  placeholder={estimatedValue}
                  name="estimatedValue"
                  value={estimatedValue}
                  onChange={this.onChange}
                />
              </div>
              <div className="bx--col-lg-6">
                <TextArea
                  style={{ backgroundColor: 'white' }}
                  cols={50}
                  id="incidentDetails"
                  invalidText="A valid value is required"
                  labelText="How did incident occur?"
                  placeholder="Incident details"
                  rows={4}
                  name="incidentDetails"
                  value={incidentDetails}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="bx--row claim-assessment__padding_2" />

            <Button
              kind="primary"
              tabIndex={0}
              type="submit"
              onClick={this.onSubmit}>
              Submit
            </Button>

            <div className="bx--row claim-assessment__padding" />

            <div className="bx--row claim-assessment__form-element">
              <div className="bx--col-lg">
                <CustomerInfo
                  name={this.state.customerName}
                  serviceAddress={this.state.customerServiceAddress}
                  primaryPhone={this.state.customerPrimaryPhone}
                  secondaryPhone={this.state.customerSecondaryPhone}
                  email={this.state.customerEmail}
                  customerSince={this.state.customerCustomerSince}
                  age={this.state.customerAge}
                  isSubmitted={this.state.isSubmitted}
                />
              </div>
              <div className="bx--col-lg">
                <PredictedOutcome
                  likelyOutcome={this.state.likelyOutcome}
                  debiasedOutcomeProbabilities={
                    this.state.debiasedOutcomeProbabilities
                  }
                  isSubmitted={this.state.isSubmitted}
                  predictionOutcome={this.state.predictionOutcome}
                  predictionProbability={this.state.predictionProbability}
                />
              </div>
            </div>

            <div className="bx--row claim-assessment__form-element">
              <div className="bx--col-lg">
                {/*<Factors*/}
                {/*  isSubmitted={this.state.isSubmitted}*/}
                {/*  data={this.state.positiveFactorsData}*/}
                {/*  title={this.state.factorsChartTitle}*/}
                {/*/>*/}

                {/*<Factors*/}
                {/*  isSubmitted={this.state.isSubmitted}*/}
                {/*  data={this.state.negativeFactorsData}*/}
                {/*  title={this.state.factorsChartTitle}*/}
                {/*/>*/}

                <Factors
                  isSubmitted={this.state.isSubmitted}
                  data={this.state.factorsData}
                  title={this.state.factorsChartTitle}
                />
              </div>
              <div className="bx--col-lg">
                <OpenScale
                  bias={this.state.bias}
                  isSubmitted={this.state.isSubmitted}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClaimAssessment;
