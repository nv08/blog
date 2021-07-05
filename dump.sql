--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: author; Type: TABLE DATA; Schema: public; Owner: nilay
--

COPY public.author (id, author_name) FROM stdin;
3f0cfcf1-24ff-48e3-a3e6-0dfb3e849769	nilay132
c73ee0fb-7267-4a67-8d4e-afcddc7b2d9d	nv
eb1a61bd-1c1d-445a-9e18-3c4fdf389a54	nilay
\.


--
-- Data for Name: cred; Type: TABLE DATA; Schema: public; Owner: nilay
--

COPY public.cred (id, session_id, name, email, password, is_author) FROM stdin;
123	fjrif9fd90f8d09s09	nilay	n@n.n	nv08	t
eb1a61bd-1c1d-445a-9e18-3c4fdf389a54	d7A27nREuQMEgVCijGRqHBYHsVYIyHlZ	nilay	email@a.com	123	t
3f0cfcf1-24ff-48e3-a3e6-0dfb3e849769	cFXvnbGZ_P_KtDGaeVxeRD7iZB2iRAQc	nilay132	email@a.com	123	t
3b6ba99d-8ec9-492a-8514-4dee938441ae	lLfe_NoikXaI3SwWQfVl_WrKZ3ULBbSV	nilayew	email@a.com	123	t
602f198c-ec22-4f35-9b88-93eea7e8a3e9	VJ2wrocrwMIy-axUCDBps6uk7DeJWMWM	nilayew7	email@a.com	123	t
a1c657ea-dbb6-4399-8570-e9f65952b6f7	Iv0KM1e1Z0zJKl8u-0-VMwPAmpaJ6X3I	nilay123	email@a.com	123	f
c73ee0fb-7267-4a67-8d4e-afcddc7b2d9d	QDOsFyGaiWaM7pK8l9m-SQCcU5HkgHmi	nv	nyvy.02@gmail.com	123	t
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: nilay
--

COPY public.posts (post_id, title, content, date, author_id) FROM stdin;
600fc1da-2852-483b-8312-b18e27bddae2	nv08	 asd	2021-07-05 00:34:48.194	3f0cfcf1-24ff-48e3-a3e6-0dfb3e849769
de29465f-da1d-42c5-baa6-8784fb5bba63	nv08	 asdf	2021-07-05 00:37:50.364	3f0cfcf1-24ff-48e3-a3e6-0dfb3e849769
c6fe60cc-cf01-41d2-bfc9-7516e8a9311d	nv08	asdfrewq	2021-07-05 00:39:20.281	3f0cfcf1-24ff-48e3-a3e6-0dfb3e849769
94401518-ab87-41e2-bbd0-5f594246eac8	nv08	 heklo	2021-07-05 00:40:56.141	c73ee0fb-7267-4a67-8d4e-afcddc7b2d9d
ff08842c-9fda-428a-8038-b922caa81a2a	nilay	 this is the first post of date 5 july for testing	2021-07-05 02:08:34.994	eb1a61bd-1c1d-445a-9e18-3c4fdf389a54
8c18a6b3-7320-4f34-b612-9e1115f1f9e8	here it is!	 posted on github! And updated the file\r\n    	2021-07-05 03:45:25.246	eb1a61bd-1c1d-445a-9e18-3c4fdf389a54
\.


--
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: nilay
--

COPY public.test (author, post, tags, id) FROM stdin;
\.


--
-- PostgreSQL database dump complete
--

