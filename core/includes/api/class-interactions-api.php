<?php
/**
 * Cwicly Interactions API.
 *
 * @package cwicly
 */

namespace Cwicly;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Cwicly Interactions API.
 */
class Interactions_API extends \WP_REST_Controller {
	/**
	 * Constructor
	 */
	public function __construct() {
		$this->register_routes();
	}

	/**
	 * Register the routes for the objects of the controller.
	 */
	public function register_routes() {
		$namespace = 'cwicly/v' . CWICLY_API_VERSION;

		$base = 'interactions';
		register_rest_route(
			$namespace,
			'/' . $base,
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_global_interactions' ),
					'permission_callback' => array( '\Cwicly\Helpers', 'permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'save_global_interactions' ),
					'permission_callback' => array( '\Cwicly\Helpers', 'permissions_check_admin' ),
				),
			)
		);
	}

	/**
	 * Get global interactions
	 *
	 * @return \WP_REST_Response
	 */
	public function get_global_interactions() {
		$interactions = get_option( 'cwicly_global_interactions', '{}' );
		return new \WP_REST_Response( $interactions, 200 );
	}

	/**
	 * Save global interactions
	 *
	 * @param  object $request Request object.
	 * @return \WP_REST_Response
	 */
	public function save_global_interactions( $request ) {
		$body = json_decode( $request->get_body(), true );

		if ( isset( $body['interactions'] ) ) {
			$interactions = $body['interactions'];
			update_option( 'cwicly_global_interactions', wp_json_encode( $interactions ) );
			
			// Update heartbeat to notify editors
			$heartbeat = get_option( 'cwicly_heartbeat', array() );
			$heartbeat['cwicly_global_interactions'] = time();
			update_option( 'cwicly_heartbeat', $heartbeat );

			return new \WP_REST_Response( array( 'success' => true ), 200 );
		}

		return new \WP_REST_Response( new \WP_Error( 'no_interactions', 'No interactions provided', array( 'status' => 400 ) ), 400 );
	}
}
