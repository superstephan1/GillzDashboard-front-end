export default interface ZendeskInterface {
    'id': number;
    'url': string;
    'name': string;
    'email': string;
    'created_at': string;
    'updated_at': string;
    'time_zone': string;
    'iana_time_zone': string;
    'phone': null;
    'shared_phone_number': null;
    'photo': null;
    'locale_id': number;
    'locale': string;
    'organization_id': number;
    'role': string;
    'verified': boolean;
    'external_id': null;
    'tags': [];
    'alias': null;
    'active': boolean;
    'shared': boolean;
    'shared_agent': boolean;
    'last_login_at': string;
    'two_factor_auth_enabled': null;
    'signature': null;
    'details': null;
    'notes': null;
    'role_type': null;
    'custom_role_id': null;
    'moderator': boolean;
    'ticket_restriction': null;
    'only_private_comments': boolean;
    'restricted_agent': boolean;
    'suspended': boolean;
    'chat_only': boolean;
    'default_group_id': number;
    'report_csv': boolean;
    'user_fields': {};
    'via': {
        'channel': string,
        'source': {
            'from': {

            },
            'to': {

            },
            'rel': null
        }
    };
    'type': string;
    'subject': string;
    'raw_subject': string;
    'description': string;
    'priority': string;
    'status': string;
    'recipient': null;
    'requester_id': number;
    'submitter_id': number;
    'assignee_id': number;
    'group_id': number;
    'collaborator_ids': [];
    'follower_ids': [];
    'email_cc_ids': [];
    'forum_topic_id': null;
    'problem_id': null;
    'has_incidents': boolean;
    'is_public': boolean;
    'due_at': null;
    'custom_fields': [];
    'satisfaction_rating': null;
    'sharing_agreement_ids': [];
    'fields': [];
    'followup_ids': [];
    'brand_id': number;
    'allow_channelback': boolean;
    'allow_attachments': boolean;
}